import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronLeft, X } from "lucide-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { CreateSecondaryOrderProps } from "../../types/types";
import { API_ROUTES } from "../../lib/api";
import axios from "axios";
import { useGetProductsQuery } from "../../../../client1/src/components/page/Product"

export default function CreateSecondaryOrder() {
    const [productId, setProductId] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [addedItems, setAddedItems] = useState<
        { product: number; quantity: number }[]
    >([]);

    const { data: productResponse } = useGetProductsQuery();
    const products = productResponse?.data ?? [];

    const navigate = useNavigate()

    const { id } = useParams();
    const customerId = Number(id);

    const queryClient = useQueryClient();

    const createSecondaryOrder = useMutation({
        mutationFn: async (data: CreateSecondaryOrderProps) => {
            const res = await axios.post<Response>(API_ROUTES.SECONDARYORDER.POST(customerId), data, {
                withCredentials: true
            });
            return res.data;
        },
        onSuccess: () => {
            alert("Order Created successfully");

            setProductId("");
            setQuantity(1);
            setAddedItems([]);

            queryClient.invalidateQueries({
                queryKey: ["get-customers"]
            })
        }
    });

    const handleCreateSecondaryOrders = () => {
        if (addedItems.length === 0) {
            return alert("Please enter valid product details and quantity")
        }

        if (addedItems.some((items) => items.quantity === 0) || addedItems.some((items) => items.product <= 0)) {
            return alert("ah ky re tum ?! kabhi quantity nhii dete tho kabhi name nhi dete")
        }

        createSecondaryOrder.mutate({
            customerId,
            items: addedItems.map((item) => ({
                productId: item.product,
                quantity: item.quantity
            }))
        })
    }

    return (
        <div className="flex flex-col items-center mt-4">
            <div className="flex justify-between items-center w-full">
                <button onClick={() => navigate(-1)}>
                    <ChevronLeft />
                </button>
                <div>
                    Create Secondary Order
                </div>
            </div>

            <div>
                <div
                    className="w-50">
                    <p>
                        Product
                    </p>
                    <select
                        name="product"
                        id="product"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}>
                        <option value="">Select</option>
                        {products.map((product) => (
                            <option value={product.id}
                                key={product.id}
                            >
                                {product.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <p>
                        Quantity
                    </p>
                    <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="p-2 px-3 text-sm border border-[#e4daca] rounded-lg outline-0 focus:ring ring-[#d6c8b3] bg-white/70 w-full"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full max-h-30 overflow-scroll">
                {addedItems.map((item, index) => {
                    const product = products.find(
                        product => product.id === item.product
                    );

                    return (
                        <div
                            key={index}
                            className="border border-black/20 p-2 rounded-lg flex justify-between"
                        >
                            {product?.name} ({item.quantity})
                            :
                            ₹{(product?.price || 0) * item.quantity}

                            <button
                                onClick={() => {
                                    setAddedItems(prev =>
                                        prev.filter((_, items) => items !== index)
                                    );
                                }}
                                className="hover:text-red-500 hover:bg-neutral-100 hover:rounded-full p-2 hover:curssor-pointer"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    );
                })}
            </div>
            <div className="flex gap-2">
                <button
                    className="w-fit px-2 py-1 rounded-lg hover:cursor-pointer"
                    onClick={() => {
                        setAddedItems(prev => [
                            ...prev,
                            {
                                product: Number(productId),
                                quantity: Number(quantity)
                            }
                        ]);

                        setProductId("");
                        setQuantity(1);
                    }}

                >
                    Add More Items
                </button>
            </div>
            <div>
                <button
                    onClick={handleCreateSecondaryOrders}
                >
                    Create
                </button>
            </div>
        </div>
    )
}