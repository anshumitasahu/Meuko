import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"
import { API_ROUTES } from "../../../lib/api";
import { useGetProductsQuery } from "../../page/Product";
import type { CreateProductsProps } from "../../../types/types";
import { X } from "lucide-react";


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
        <div className="bg-[#f2efeb] p-6 rounded-lg">
            <div className=" flex justify-between items-center w-full text-sm">
                <div className="text-[#30210C]">
                    Create Products
                </div>
                <button
                    className="text-[#493416]/50 hover:text-[#493416]"
                    onClick={onClose}
                >
                    <X size={20} />
                </button>
            </div>
            <div className="flex flex-col gap-4 border-t border-t-[#F2EFEA] pt-4 w-full text-[#30210C]">
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#807563]">
                        Product's Name
                    </p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                        placeholder="Enter Product's name"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#807563]">
                        Product's price
                    </p>
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                        placeholder="Enter Product's price"
                    />
                </div>
            </div>
            <div className="mt-4 w-full flex justify-end">
                <button
                    onClick={handleCreateProducts}
                    className="bg-[#453115] text-white w-fit px-2 py-1 rounded-lg hover:cursor-pointer text-sm hover:bg-[#32220c]"
                >
                    Create
                </button>
            </div>
        </div>
    )
}