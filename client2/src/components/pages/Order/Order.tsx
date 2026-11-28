import { useState } from "react";
import PrimaryOrder from "./PrimaryOrder";
import SecondaryOrders from "./SecondaryOrder";


export default function Orders() {
    const [isActiveTab, setIsActiveTab] = useState("primary")

    return (
        <div className="p-4 w-full">
            <div className="flex gap-2 border-b border-neutral-400">
                <button
                    className="w-full p-2"
                    onClick={() => { setIsActiveTab("primary") }}
                    style={{
                        borderBottom: isActiveTab === "primary" ? "2px black solid" : ""
                    }}
                >
                    Primary Order
                </button>
                <button
                    className="w-full p-2"
                    onClick={() => { setIsActiveTab("secondary") }}
                    style={{
                        borderBottom: isActiveTab === "secondary" ? "2px black solid" : ""
                    }}
                >
                    Secondary Order
                </button>
            </div>
            {isActiveTab == "primary" ? <PrimaryOrder /> : <SecondaryOrders />}
        </div>
    )
}