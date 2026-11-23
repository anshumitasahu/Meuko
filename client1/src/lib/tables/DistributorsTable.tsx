import type { ColumnDef } from "@tanstack/react-table";
import type { Distributor } from "../../types/types";

export const columns: ColumnDef<Distributor>[] = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ getValue }) => {
            const value = String(getValue() ?? '');
            const maxLength = 15;

            return value.length > maxLength
                ? `${value.slice(0, maxLength)}...`
                : value;
        },
    },
    {
        accessorKey: "email",
        header: "E-Mail",
        cell: ({ getValue }) => {
            const value = String(getValue() ?? '');
            const maxLength = 20;

            return value.length > maxLength
                ? `${value.slice(0, maxLength)}...`
                : value;
        },
    },
    {
        accessorKey: "address",
        header: "Address",
        cell: ({ getValue }) => {
            const value = String(getValue() ?? '');
            const maxLength = 50;

            return value.length > maxLength
                ? `${value.slice(0, maxLength)}...`
                : value;
        },
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