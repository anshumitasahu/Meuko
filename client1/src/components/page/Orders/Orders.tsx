import { useState } from "react";
import PrimaryOrder from "./PrimaryOrders";
import SecondaryOrders from "./SecondaryOrders";


export default function Orders() {
    const [isActiveTab, setIsActiveTab] = useState("primary")

    return (
        <div className="p-8 w-full">
            <div className="flex gap-2">
                <button
                    className="border rounded-md p-2"
                    onClick={() => { setIsActiveTab("primary") }}
                >
                    Primary Order
                </button>
                <button
                    className="border rounded-md p-2"
                    onClick={() => { setIsActiveTab("secondary") }}
                >
                    Secondary Order
                </button>
            </div>
            {isActiveTab == "primary" ? <PrimaryOrder /> : <SecondaryOrders />}
        </div>
    )
}