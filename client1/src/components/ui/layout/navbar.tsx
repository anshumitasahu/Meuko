import { Box, Briefcase, LayoutDashboard, LogOut, ShoppingBasket, Truck, Users } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
    const [isActive, setIsActive] = useState("Dashboard");

    const location = useLocation();
    const hideNavBarPaths = '/';
    const showNavBar = !hideNavBarPaths.includes(location.pathname)

    return (
        <div>
            {
                showNavBar && (
                    <div className="flex flex-col justify-between gap-3 bg-[#E6DED2] h-full w-55 text-[#211400]">
                        <div className="p-5">
                            <div className="flex items-center">
                                <img src="./logo-1.png" alt="" className="w-15" />
                                <div className="font-bold text-xl">Meuko</div>
                            </div>
                            <div className="w-full pt-4">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <NavLink to="/dashboard">
                                            <button
                                                className="p-2 rounded-lg w-full text-left"
                                                onClick={() => setIsActive("Dashboard")}
                                                style={{
                                                    backgroundColor: isActive === "Dashboard" ? "#D2C9BD" : ""
                                                }}
                                            >
                                                <div className="flex items-center gap-2 rounded-lg">
                                                    <LayoutDashboard />
                                                    <span>Dashboard</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/customers">
                                            <button
                                                className="p-2 rounded-lg w-full text-left"
                                                onClick={() => setIsActive("Customers")}
                                                style={{
                                                    backgroundColor: isActive === "Customers" ? "#D2C9BD" : ""
                                                }}
                                            >
                                                <div className="flex items-center gap-2 rounded-lg">
                                                    <Users />
                                                    <span>Customers</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/salesman">
                                            <button
                                                className="p-2 rounded-lg w-full text-left"
                                                onClick={() => setIsActive("Salesmen")}
                                                style={{
                                                    backgroundColor: isActive === "Salesmen" ? "#D2C9BD" : ""
                                                }}
                                            >
                                                <div className="flex items-center gap-2 rounded-lg">
                                                    <Briefcase />
                                                    <span>Salesmen</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/products">
                                            <button
                                                className="p-2 rounded-lg w-full text-left"
                                                onClick={() => setIsActive("Products")}
                                                style={{
                                                    backgroundColor: isActive === "Products" ? "#D2C9BD" : ""
                                                }}
                                            >
                                                <div className="flex items-center gap-2 rounded-lg">
                                                    <Box />
                                                    <span>Products</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/distributors">
                                            <button
                                                className="p-2 rounded-lg w-full text-left"
                                                onClick={() => setIsActive("Distributors")}
                                                style={{
                                                    backgroundColor: isActive === "Distributors" ? "#D2C9BD" : ""
                                                }}
                                            >
                                                <div className="flex items-center gap-2 rounded-lg">
                                                    <Truck />
                                                    <span>Distributors</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="orders">
                                            <button
                                                className="p-2 rounded-lg w-full text-left"
                                                onClick={() => setIsActive("Orders")}
                                                style={{
                                                    backgroundColor: isActive === "Orders" ? "#D2C9BD" : ""
                                                }}
                                            >
                                                <div className="flex items-center gap-2 rounded-lg">
                                                    <ShoppingBasket />
                                                    <span>Orders</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3 mb-3 items-center justify-between w-full hover:cursor-pointer border-t border-[#d6c2a1]">
                            <div className="flex gap-2 items-center">
                                <img src="/admin.jpeg" alt="" className="w-11 rounded-2xl border-2 border-white shadow-sm" />
                                <div className="flex flex-col">
                                    <span className="text-sm">Hana Yoshida</span>
                                    <span className="text-xs">admin@gmail.com</span>
                                </div>
                            </div>
                            <div className="bg-[#eeebe7] p-1 rounded-sm">
                                <LogOut size={16} />
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}