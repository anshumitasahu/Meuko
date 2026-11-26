import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { DistributorQueryResponse } from "../../types/types";
import { API_ROUTES } from "../../lib/api";
import { ChevronRight, User } from "lucide-react";


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
    const { data, isLoading, isError } = useGetDistributorsQuery();

    const distributors = data?.data ?? [];

    return (
        <div className="p-3 w-full">
            <h1 className="text-md pb-4 font-bold text-[#352206]">Distributors</h1>
            <div className="pb-4 flex justify-between">
                <input
                    type="text"
                    placeholder="Search distributors"
                    className="p-2 px-3 text-sm border border-[#e4daca] rounded-lg outline-0 focus:ring ring-[#d6c8b3] bg-white/70 w-full"
                />
            </div>

            {isLoading && <p>Loading..</p>}

            {isError && <p>Failed to fetch distributors</p>}

            {!isLoading && !isError && (
                <>
                    <div>
                        {distributors.map((distributor) => (
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
                                        <button>
                                            <ChevronRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}