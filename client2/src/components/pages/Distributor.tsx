import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { DistributorQueryResponse } from "../../types/types";
import { API_ROUTES } from "../../lib/api";
import { ChevronRight, SearchX, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const useGetDistributorsQuery = () => {
    return useQuery({
        queryKey: ["get-distributors"],
        queryFn: async () => {
            const res = await axios.get<DistributorQueryResponse>(API_ROUTES.DISTRIBUTORS.GET);
            return res.data
        }
    })
}

export default function Distributor() {
    const [query, setQuery] = useState("");


    const { data, isLoading, isError } = useGetDistributorsQuery();

    const distributors = data?.data ?? [];

    const navigate = useNavigate();

    const filterDistributors = distributors.filter((distributor) => {
        const input = query.trim().toLowerCase();

        return (
            distributor.name.toLowerCase().includes(input) ||
            distributor.phone.toLowerCase().includes(input) ||
            distributor.address.toLowerCase().includes(input) ||
            distributor.email.toLowerCase().includes(input)
        );
    })

    return (
        <div className="p-3 w-full">
            <h1 className="text-md pb-4 font-bold text-[#352206]">Distributors</h1>
            <div className="pb-4 flex justify-between">
                <input
                    type="text"
                    placeholder="Search distributors"
                    className="p-2 px-3 text-sm border border-[#e4daca] rounded-lg outline-0 focus:ring ring-[#d6c8b3] bg-white/70 w-full"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {isLoading && <p>Loading..</p>}

            {isError && <p>Failed to fetch distributors</p>}

            {!isLoading && !isError && (
                <div>
                    {filterDistributors.length > 0 ? (
                        filterDistributors.map((distributor) => (
                            <div
                                key={distributor.id}
                                className="pb-3"
                            >
                                <div className="flex justify-between items-center border border-[#e0d5c7] p-2 rounded-2xl">
                                    <div className="flex items-center gap-4 ">
                                        <div
                                            className="rounded-full bg-[#eedec9] p-2 text-[#665033]"
                                        >
                                            <User />
                                        </div>
                                        <div>
                                            <p className="font-bold">
                                                {distributor.name}
                                            </p>
                                            <p className="text-sm text-neutral-500">
                                                {distributor.email}
                                            </p>
                                            <p className="text-sm text-neutral-500">
                                                {distributor.phone}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() =>
                                                navigate(`/createPrimaryOrder/${distributor.id}`)
                                            }
                                        >
                                            <ChevronRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) :
                        <div className="flex flex-col items-center justify-center mt-6 gap-1">
                            <div
                                className="bg-[#f5e8d6] text-[#665033] p-3 rounded-full mb-2"
                            >
                                <SearchX />
                            </div>
                            <p className="font-bold">
                                No Matching distributors Found
                            </p>
                            <p className="text-center text-neutral-500 text-sm">
                                We couldn't find any distributors matching '{query}'. Try another search.
                            </p>
                            <button
                                className="text-red-600 text-xs"
                                onClick={() => setQuery("")}
                            >
                                Clear search
                            </button>
                        </div>
                    }
                </div>
            )}
        </div>
    )
}