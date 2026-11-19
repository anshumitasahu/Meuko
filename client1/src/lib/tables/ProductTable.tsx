import type { ColumnDef } from "@tanstack/react-table";
import type { CreateProductsProps } from "../../types/types";

export const columns: ColumnDef<CreateProductsProps>[] = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ getValue }) => {
            const value = String(getValue() ?? '');
            const maxLength = 50;

            return value.length > maxLength
                ? `${value.slice(0, maxLength)}...`
                : value;
        },
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