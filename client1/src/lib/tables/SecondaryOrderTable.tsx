import type { ColumnDef } from "@tanstack/react-table";
import type { SecondaryOrder } from "../../types/types";

export const columns: ColumnDef<SecondaryOrder>[] = [
    {
        accessorKey: "id",
        header: "ID"
    },
    {
        accessorKey: "customerId",
        header: "Customer's ID"
    },
    {
        accessorKey: "orderItems",
        header: "Order Items", cell: ({ row }) => {
            const items = row.original.orderItems || [];

            return (
                <ul className="list-disc pl-4">
                    {items.map((item, index) => (
                        <li key={item.id || index}>
                            {item.id} (x{item.quantity})
                        </li>
                    ))}
                </ul>
            );
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