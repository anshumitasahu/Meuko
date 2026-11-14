import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { ProductQueryResponse } from "../../types/types"
import { API_ROUTES } from "../../lib/api"
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table"
import { columns } from "../../lib/tables/ProductTable"
import { useState } from "react"


export const useGetProductsQuery = () => {
    return useQuery({
        queryKey: ["get-products"],
        queryFn: async () => {
            const res = await axios.get<ProductQueryResponse>(API_ROUTES.PRODUCT.GET);
            return res.data
        }
    })
}

export default function Products() {
    const [globalFilter, setGlobalFilter] = useState("");

    const { data, isLoading, isError } = useGetProductsQuery()

    const products = data?.data ?? [];

    const table = useReactTable({
        data: products,
        columns,
        state: {
            globalFilter
        },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    })

    return (
        <div className="p-10 w-full">
            <div>
                <input
                    type="text"
                    value={globalFilter}
                    onChange={e => setGlobalFilter(e.target.value)}
                    placeholder="Search Products"
                />
            </div>
            {!isLoading && !isError && (
                <>
                    <div>
                        <table className="w-full border-separate border-spacing-0">
                            <thead>
                                {table.getHeaderGroups().map(group => (
                                    <tr
                                        key={group.id}
                                        className="text-md text-left"
                                    >
                                        {group.headers.map(headers => (
                                            <th
                                                key={headers.id}
                                                className="p-3 bg-[#D2C9BD]"
                                            >
                                                {flexRender(headers.column.columnDef.header, headers.getContext())}

                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody>
                                {table.getRowModel().rows.map(row => (
                                    <tr
                                        key={row.id}
                                        className="text-sm"
                                    >
                                        {row.getVisibleCells().map(cell => (
                                            <td
                                                key={cell.id}
                                                className="p-3 border-b-2 border-[#e7dccd]"
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    )
}