import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useState } from "react"
import type { Response, CreateDistributorProps } from "../../../../types/types";
import axios from "axios";
import { API_ROUTES } from "../../../../lib/api";


export interface CreateDistributorsModalProps {
    onClose: () => void
}


export default function CreateDistributorsModal({ onClose }: CreateDistributorsModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const queryClient = useQueryClient();

    const createDistributors = useMutation({
        mutationFn: async (data: CreateDistributorProps) => {
            const res = await axios.post<Response>(API_ROUTES.DISTRIBUTORS.POST, data, {
                withCredentials: true
            });
            return res.data;
        },
        onSuccess: () => {
            alert("Distributors created successfully")

            setName("");
            setPhone("");
            setEmail("");
            setAddress("");

            queryClient.invalidateQueries({
                queryKey: ["get-distributors"]
            })

            onClose();
        }
    });

    const handelCreateDistriibutors = () => {
        if (!name.trim() || !email.trim() || !phone.trim() || !address.trim()) {
            return alert("Please enter valid name, email, phone and address")
        }

        createDistributors.mutate({
            name,
            email,
            address,
            phone,
            createdAt: new Date(),
            updatedAt: new Date(),
            isActive: true
        })
    };

    return (
        <div className="bg-[#f2efeb] p-6 rounded-lg">
            <div className=" flex justify-between items-center w-full text-sm pb-2">
                <div className="text-[#30210C]">
                    Create Distributors
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#807563]">
                        Email
                    </p>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#807563]">
                        Phone Number
                    </p>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter Phone"
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-xs text-[#807563]">
                        Address
                    </p>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Adrress"
                        className="border border-[#DED4C6] bg-[#FAF8F4] outline-0 focus:ring ring-[#D2C7B8] rounded-md px-2 py-1"
                    />
                </div>
            </div>
            <div className="mt-4 w-full flex justify-end">
                <button
                    onClick={handelCreateDistriibutors}
                    className="bg-[#453115] text-white w-fit px-2 py-1 rounded-lg hover:cursor-pointer text-sm hover:bg-[#32220c]"
                >
                    Create
                </button>
            </div>
        </div>
    )
}