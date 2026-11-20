import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useState } from "react";
import type { CreateCustomersProps } from "../../../../types/types";
import axios from "axios";
import { API_ROUTES } from "../../../../lib/api";

type CreateCustomersModalProps = {
    onClose: () => void;
}

export default function CreateCustomersModal({ onClose }: CreateCustomersModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const queryClient = useQueryClient();

    const createCustomers = useMutation({
        mutationFn: async (data: CreateCustomersProps) => {
            const res = await axios.post<Response>(API_ROUTES.CUSTOMER.POST, data, {
                withCredentials: true
            });
            return res.data;
        },
        onSuccess: () => {
            alert("Customers created successfully");

            setName("");
            setEmail("");
            setPhone("");
            setAddress("");

            queryClient.invalidateQueries({
                queryKey: ["get-customers"]
            });

            onClose();
        }
    })

    const handleCreateCustomers = () => {
        if (!name.trim() || !email.trim() || !phone.trim() || !address.trim()) {
            return alert("Please enter valid customer name, emial, address, and phone number")
        }

        createCustomers.mutate({
            name,
            email,
            phone,
            address,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true
        })
    }
    return (
        <div className="bg-[#f2efeb] p-6 rounded-lg">
            <div className=" flex justify-between items-center w-full text-sm pb-2">
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
            <div className="flex flex-col gap-4 border-t border-t-[#d6cab5] pt-4 w-full text-[#30210C]">
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#807563]">
                        Name
                    </p>
                    <input
                        type="text"
                        placeholder="Enter Customer's Name"
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#807563]">
                        Email
                    </p>
                    <input
                        type="text"
                        placeholder="Enter Customer's Email"
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#807563]">
                        Phone Number
                    </p>
                    <input
                        type="text"
                        placeholder="Enter Customer's Phone"
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#807563]">
                        Address
                    </p>
                    <input
                        type="text"
                        placeholder="Enter Customer's Address"
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
            </div>
            <div className="mt-4 w-full flex justify-end">
                <button
                    onClick={handleCreateCustomers}
                    className="bg-[#453115] text-white w-fit px-2 py-1 rounded-lg hover:cursor-pointer text-sm hover:bg-[#32220c]"
                >
                    Create
                </button>
            </div>
        </div>
    )
}