import { ChevronLeft, X } from "lucide-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { CreatePrimaryOrderProps } from "../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_ROUTES } from "../../lib/api";
import { useGetProductsQuery } from "../../../../client1/src/components/page/Product";

export default function CreatePrimaryOrder() {
    const [productId, setProductId] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [addedItems, setAddedItems] = useState<
        { product: number, quantity: number }[]
    >([]);

    const navigate = useNavigate()

    const { id } = useParams();
    const distributorId = Number(id);

    const queryClient = useQueryClient();

    const createPrimaryOrders = useMutation({
        mutationFn: async (data: CreatePrimaryOrderProps) => {
            const res = await axios.post<Response>(API_ROUTES.PRIMARYORDER.POST(distributorId), data, {
                withCredentials: true
            });
            return res.data
        },
        onSuccess: () => {
            alert("Order created successfully");

            setProductId("");
            setQuantity(1);
            setAddedItems([]);

            queryClient.invalidateQueries({
                queryKey: ["get-distributors"]
            })
        }
    })

    const handleCreatePrimaryOrders = () => {
        if (addedItems.length === 0) {
            return alert("Please enter valid product details and quantity")
        }

        if (addedItems.some((items) => items.quantity === 0) || addedItems.some((items) => items.product <= 0)) {
            return alert("Please enter product and quantity")
        }
        createPrimaryOrders.mutate({
            distributorId,
            items: addedItems.map((items) => ({
                productId: items.product,
                quantity: items.quantity
            }))
        })
    }

    const { data: productsResponse } = useGetProductsQuery();
    const products = productsResponse?.data ?? [];

    return (
        <div className="flex flex-col items-center mt-4">
            <div className="flex justify-between items-center w-full">
                <button onClick={() => navigate(-1)}>
                    <ChevronLeft />
                </button>
                <div>
                    Create Primary Order
                </div>
            </div>

            <div>
                <div>
                    <p>
                        Product
                    </p>

                    <select
                        name="product"
                        id="product"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        className="w-50"
                    >
                        <option value="">Select</option>
                        {products.map((product) => (
                            <option
                                value={product.id}
                                key={product.id}
                            >
                                {product.name} : {product.price}
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
                <div>
                    {addedItems.map((item, index) => {
                        const product = products.find(product => product.id === item.product);

                        return (
                            <div
                                key={index}
                            >
                                {product?.name} ({item.quantity}): Rs{(product?.price || 0) * item.quantity}

                                <button
                                    onClick={() => {
                                        setAddedItems(prev =>
                                            prev.filter((_, items) => items !== index)
                                        )
                                    }}
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <button
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
                        onClick={handleCreatePrimaryOrders}
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    )
}