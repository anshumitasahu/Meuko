
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { PrimaryOrderQueryResponse } from "../../../types/types";
import { API_ROUTES } from "../../../lib/api";
import { Phone, Store } from "lucide-react";

export const useGetPrimaryOrdersForSalesmanQuery = () => {
    return useQuery({
        queryKey: ["get-primaryOrdersForSalesman"],
        queryFn: async () => {
            const res = await axios.get<PrimaryOrderQueryResponse>(
                API_ROUTES.PRIMARYORDER.GET
            );
            return res.data;
        },
    });
};

export default function PrimaryOrders() {
    const { data, isLoading, isError } =
        useGetPrimaryOrdersForSalesmanQuery();

    const primaryOrders = data?.data ?? [];

    if (isLoading) {
        return <p>Loading orders...</p>;
    }

    if (isError) {
        return <p>Failed to fetch your orders.</p>;
    }

    if (primaryOrders.length === 0) {
        return <p>You have no orders yet.</p>;
    }

    return (
        <div className="pt-2">
            {primaryOrders.map((order) => {
                const orderTotal = order.orderItems.reduce(
                    (total, item) =>
                        total + item.product.price * item.quantity,
                    0
                );

                return (
                    <div key={order.id} className="border border-neutral-300 px-4 rounded-lg my-4 ">
                        <div className="flex-col flex gap-3 border-b py-2 border-neutral-300">
                            <div
                                className="flex justify-between"
                            >
                                <h3
                                    className="font-bold"
                                >Order #{order.id}</h3>
                                <div
                                    className="text-md text-neutral-500"
                                >
                                    {new Date(order.createdAt).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <Store size={18} />
                                    <p
                                        className="font-semibold"
                                    >
                                        {order.distributor.name}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={18} />
                                    <p
                                        className="text-sm font-light text-neutral-800"
                                    >
                                        {order.distributor.phone}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-neutral-300 py-2">
                            {order.orderItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between"
                                >
                                    <div>
                                        <p>
                                            {item.product.name}
                                        </p>
                                        <p className="text-sm text-neutral-600">
                                            ₹{item.product.price} x {item.quantity}
                                        </p>
                                    </div>
                                    <p className="font-bold">
                                        ₹{item.product.price * item.quantity}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="py-2 flex justify-between">
                            <p className="text-sm text-neutral-600">Total Amount</p>
                            <p className="font-bold"> ₹{orderTotal}</p>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}
