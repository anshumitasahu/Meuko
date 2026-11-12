import { Box, Briefcase, LayoutDashboard, LogOut, ShoppingBasket, Truck, Users } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    const hideNavBarPaths = '/';
    const showNavBar = !hideNavBarPaths.includes(location.pathname)

    return (
        <div>
            {
                showNavBar && (
                    <div className="flex flex-col justify-between gap-3 bg-[#E6DED2] h-full w-65 text-[#211400]">
                        <div className=" p-8">
                            <div className="flex items-center">
                                <img src="./logo-1.png" alt="" className="w-15" />
                                <div className="font-bold text-xl">Meuko</div>
                            </div>
                            <div className="w-full pt-8">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <NavLink to="/dashboard">
                                            <button className="p-2 rounded-lg w-full text-left">
                                                <div className="flex items-center gap-2 bg-[#D2C9BD] p-2 rounded-lg">
                                                    <LayoutDashboard />
                                                    <span>Dashboard</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/customers">
                                            <button className="p-2 rounded-lg w-full text-left">
                                                <div className="flex items-center gap-2 p-2 rounded-lg">
                                                    <Users />
                                                    <span>Customers</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/salesman">
                                            <button className="p-2 rounded-lg w-full text-left">
                                                <div className="flex items-center gap-2 p-2 rounded-lg">
                                                    <Briefcase />
                                                    <span>Salesman</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/products">
                                            <button className="p-2 rounded-lg w-full text-left">
                                                <div className="flex items-center gap-2 p-2 rounded-lg">
                                                    <Box />
                                                    <span>Product</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/distributors">
                                            <button className="p-2 rounded-lg w-full text-left">
                                                <div className="flex items-center gap-2 p-2 rounded-lg">
                                                    <Truck />
                                                    <span>Distributor</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="orders">
                                            <button className="p-2 rounded-lg w-full text-left">
                                                <div className="flex items-center gap-2 p-2 rounded-lg">
                                                    <ShoppingBasket />
                                                    <span>Orders</span>
                                                </div>
                                            </button>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3 mb-3 items-center justify-between w-full hover:cursor-pointer">
                            <div className="flex gap-2 items-center">
                                <img src="/admin.jpeg" alt="" className="w-11 rounded-2xl border-2 border-white" />
                                <div className="flex flex-col">
                                    <span className="text-sm">Hana Yoshida</span>
                                    <span className="text-xs">admin@gmail.com</span>
                                </div>
                            </div>
                            <LogOut size={18} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}