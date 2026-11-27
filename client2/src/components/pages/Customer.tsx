import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { CustomersQueryResponse } from "../../types/types";
import { API_ROUTES } from "../../lib/api";
import { ChevronRight, SearchX, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const useGetCustomersQuery = () => {
    return useQuery({
        queryKey: ["get-customers"],
        queryFn: async () => {
            const res = await axios.get<CustomersQueryResponse>(API_ROUTES.CUSTOMER.GET);
            return res.data
        }
    })
}

export default function Customer() {
    const [query, setQuery] = useState("");

    const { data, isLoading, isError } = useGetCustomersQuery();

    const customers = data?.data ?? [];

    const navigate = useNavigate();

    const filterCustomers = customers.filter((customer) => {
        const input = query.trim().toLowerCase();

        return (
            customer.name.toLowerCase().includes(input) ||
            customer.phone.toLowerCase().includes(input) ||
            customer.address.toLowerCase().includes(input) ||
            customer.email.toLowerCase().includes(input)
        );
    })
    return (
        <div className="p-3 w-full">
            <h1 className="text-md pb-4 font-bold text-[#352206]">Customers</h1>
            <div className="pb-4 flex justify-between">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search customers"
                    className="p-2 px-3 text-sm border border-[#e4daca] rounded-lg outline-0 focus:ring ring-[#d6c8b3] bg-white/70 w-full"
                />
            </div>

            {isLoading && <p>Loading..</p>}

            {isError && <p>Failed to fetch customers</p>}

            {!isLoading && !isError && (
                <div>
                    {filterCustomers.length > 0 ? (
                        filterCustomers.map((customer) => (
                            <div
                                key={customer.id}
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
                                                {customer.name}
                                            </p>
                                            <p className="text-sm text-neutral-500">
                                                {customer.email}
                                            </p>
                                            <p className="text-sm text-neutral-500">
                                                {customer.phone}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => navigate("/createPrimaryOrder")}
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
                                No Matching Customers Found
                            </p>
                            <p className="text-center text-neutral-500 text-sm">
                                We couldn't find any customers matching '{query}'. Try another search.
                            </p>
                            <p className="text-red-600 text-xs">
                                Clear search
                            </p>
                        </div>
                    }
                </div>
            )}
        </div>
    )
}