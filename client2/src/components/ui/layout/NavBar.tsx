import { ClipboardList, Truck, UserGroup } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
    const [isActive, setIsActive] = useState("Customers");

    const location = useLocation();
    const hideNavBarPaths = '/';
    const showNavBar = !hideNavBarPaths.includes(location.pathname)

    return (
        <div className="flex gap-2 bg-[#eee8df] p-2 justify-between sticky w-full top-0">
            <div>
                <NavLink to="/customers">
                    <button
                        className="flex flex-col items-center justify-center px-2 py-1 rounded-lg text-neutral-500"
                        onClick={() => setIsActive("Customers")}
                        style={{
                            backgroundColor: isActive === "Customers" ? "#f8f6f3" : "",
                            color: isActive === "Customers" ? "#634820" : ""
                        }}
                    >
                        <UserGroup />
                        Customers
                    </button>
                </NavLink>
            </div>
            <div>
                <NavLink to="/distributors">
                    <button
                        className="flex flex-col items-center justify-center px-2 py-1 rounded-lg text-neutral-500"
                        onClick={() => setIsActive("Distributors")}
                        style={{
                            backgroundColor: isActive === "Distributors" ? "#f8f6f3" : "",
                            color: isActive === "Distributors" ? "#634820" : ""
                        }}
                    >
                        <Truck />
                        Distributors
                    </button>
                </NavLink>
            </div>
            <div>
                <NavLink to="/orders">
                    <button
                        className="flex flex-col items-center justify-center px-2 py-1 rounded-lg text-neutral-500"
                        onClick={() => setIsActive("Orders")}
                        style={{
                            backgroundColor: isActive === "Orders" ? "#f8f6f3" : "",
                            color: isActive === "Orders" ? "#634820" : ""
                        }}
                    >
                        <ClipboardList />
                        My Orders
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
