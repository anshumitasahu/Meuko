import type { ColumnDef } from "@tanstack/react-table";
import type { CreateCustomersProps } from "../../types/types";

export const columns: ColumnDef<CreateCustomersProps>[] = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "email",
        header: "E-Mail"
    },
    {
        accessorKey: "phone",
        header: "Phone Num."
    },
    {
        accessorKey: "address",
        header: "Address"
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