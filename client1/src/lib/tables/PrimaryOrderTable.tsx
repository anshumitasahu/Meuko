import type { ColumnDef } from "@tanstack/react-table";
import type { PrimaryOrder } from "../../types/types";

export const columns: ColumnDef<PrimaryOrder>[] = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "distributorId",
        header: "Distributor's ID"
    },
    {
        accessorKey: "items",
        header: "Order Items",
        cell: ({ row }) => {
            const items = row.original.orderItems || [];
            const maxLength = 50;

            const fullText = items.map((item) => `${item.product.name} (x${item.quantity})`).join(', ');

            const displayText =
                fullText.length > maxLength
                    ? `${fullText.slice(0, maxLength)}...`
                    : fullText;

            return <span title={fullText}>{displayText}</span>;
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