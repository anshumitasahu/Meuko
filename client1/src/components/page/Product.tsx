import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import type { ProductQueryResponse } from "../../types/types"
import { API_ROUTES } from "../../lib/api"
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import { columns } from "../../lib/tables/ProductTable"
import { useState } from "react"
import { Plus } from "lucide-react"
import Skeleton from "../ui/utils/Skeletion"
import CrateProductsModal from "../ui/Modals/Products/CreateProdutsModal"


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
    const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
    const [isOpen, setIsOpen] = useState(false)

    const { data, isLoading, isError } = useGetProductsQuery()

    const products = data?.data ?? [];

    const table = useReactTable({
        data: products,
        columns,
        state: {
            globalFilter,
            pagination
        },
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return (
        <div className="p-8 w-full">
            <h1 className="text-md pb-4 font-bold text-[#352206]">Products</h1>
            <div className="pb-4 flex justify-between">
                <input
                    type="text"
                    value={globalFilter}
                    onChange={e => setGlobalFilter(e.target.value)}
                    placeholder="Search Products"
                    className="p-2 px-3 text-sm border border-[#e4daca] rounded-lg outline-0 focus:ring ring-[#d6c8b3] bg-white/70"
                />
                <button
                    className="flex gap-2 text-white bg-[#352206] px-2 py-1 rounded-lg items-center justify-center text-sm"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Plus />Add Products
                </button>
            </div>

            {isLoading && <Skeleton width="100%" height="500px" />}

            {isError && <p>Failed to fetch products</p>}

            {!isLoading && !isError && (
                <>
                    <div>
                        <table className="w-full border-separate border-spacing-0">
                            <thead>
                                {table.getHeaderGroups().map(group => (
                                    <tr
                                        key={group.id}
                                        className="text-md text-left text-[#211400]"
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
                                        className="text-sm hover:bg-[#ebe3d8]"
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

                                {table.getRowModel().rows.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan={columns.length}
                                            className="p-5text-center text-gray-500"
                                        >
                                            No Products Found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-between p-3 shrink-0 mt-4">
                        <div className="flex items-center gap-2 text-sm">
                            <span>Rows per page:</span>

                            <select
                                value={pagination.pageSize}
                                onChange={e =>
                                    table.setPageSize(Number(e.target.value))
                                }
                                className="border border-gray-200 rounded-md p-1 outline-none"
                            >
                                {[5, 10, 20, 50].map(size => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex items-center gap-2">

                            <button
                                onClick={() => table.setPageIndex(0)}
                                disabled={!table.getCanPreviousPage()}
                                className="px-2 py-1 border border-neutral-700 text-sm rounded-md disabled:opacity-50"
                            >
                                {"<<"}
                            </button>

                            <button
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                                className="px-2.5 py-1 border border-neutral-700 text-sm rounded-md disabled:opacity-50"
                            >
                                &lt;
                            </button>

                            <span className="text-xs text-gray-600">
                                Page{" "} {table.getState().pagination.pageIndex + 1} {" "}of{" "} {Math.max(table.getPageCount(), 1)}
                            </span>

                            <button
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                                className="px-2.5 py-1 border border-neutral-700 text-sm rounded-md disabled:opacity-50"
                            >
                                &gt;
                            </button>

                            <button
                                onClick={() =>
                                    table.setPageIndex(table.getPageCount() - 1)
                                }
                                disabled={!table.getCanNextPage()}
                                className="px-2 py-1 border border-neutral-700 text-sm rounded-md disabled:opacity-50"
                            >
                                {">>"}
                            </button>
                        </div>
                    </div>
                </>
            )}

            {isOpen && (
                <div className="flex bg-black/20 backdrop-blur-xs absolute z-50 inset-0 justify-center items-center">
                    <CrateProductsModal
                        onClose={() => setIsOpen(false)}
                    />
                </div>
            )}
        </div>
    )
}