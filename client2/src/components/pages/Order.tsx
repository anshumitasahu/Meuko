
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { PrimaryOrderQueryResponse } from "../../types/types";
import { API_ROUTES } from "../../lib/api";

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

export default function Orders() {
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
        <div>
            <h2>My Primary Orders</h2>

            {primaryOrders.map((order) => {
                const orderTotal = order.orderItems.reduce(
                    (total, item) =>
                        total + item.product.price * item.quantity,
                    0
                );

                return (
                    <div key={order.id} className="border">
                        <h3>Order #{order.id}</h3>

                        <div>
                            {order.orderItems.map((item, index) => (
                                <div key={index}>
                                    <p>
                                        {item.product.name} : Rs. {item.product.price}
                                    </p>

                                    <p>Quantity: {item.quantity}</p>

                                    <p>
                                        Subtotal: Rs. {item.product.price * item.quantity}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <h4>
                            Order Total: Rs. {orderTotal}
                        </h4>

                        <div>
                            {order.distributor.name}<br />
                            {order.distributor.phone}<br />
                            {order.distributor.address}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
