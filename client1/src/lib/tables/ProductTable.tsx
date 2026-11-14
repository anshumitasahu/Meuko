import type { ColumnDef } from "@tanstack/react-table";
import type { CreateProductsProps } from "../../types/types";

export const columns: ColumnDef<CreateProductsProps>[] = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "price",
        header: "Price"
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ getValue }) => new Date(getValue<string>()).toLocaleDateString()
    },
    {
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: ({ getValue }) => new Date(getValue<string>()).toLocaleDateString()
    },
    {
        accessorKey: "isActive",
        header: "Is Active"
    }
]