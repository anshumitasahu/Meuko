import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"
import { API_ROUTES } from "../../../lib/api";
import { useGetProductsQuery } from "../../page/Product";
import type { CreateProductsProps } from "../../../types/types";


type CreateProductsModalProps = {
    onClose: () => void;
}


export default function CrateProductsModal({ onClose }: CreateProductsModalProps) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const createProducts = useMutation({
        mutationFn: async (data: CreateProductsProps) => {
            const res = await axios.post<Response>(API_ROUTES.PRODUCT.POST, data);
            return res.data;
        },
        onSuccess: () => {
            alert("product created successfully");

            setName("");
            setPrice("");

            useGetProductsQuery();

            onClose();
        }
    });

    const handleCreateProducts = () => {
        if (!name.trim() || !price) {
            return alert("Please enter valid product name and price")
        }

        createProducts.mutate({
            name,
            price: Number(price),
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true
        })
    }

    return (
        <div>
            <button
                onClick={onClose}
            >
                Close
            </button>
            <div>
                <p>Product's Name</p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <p>Product's price</p>
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <button
                    onClick={handleCreateProducts}
                >
                    Add Products
                </button>
            </div>
        </div>
    )
}