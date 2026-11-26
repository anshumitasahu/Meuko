import { ClipboardList, Truck, UserGroup } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {

    const location = useLocation();
    const hideNavBarPaths = '/';
    const showNavBar = !hideNavBarPaths.includes(location.pathname)


    const getLinkClass = (path: string) => {
        const isActive = location.pathname === path;
        return `flex flex-col items-center justify-center px-2 py-1 rounded-lg ${isActive ? "bg-[#f8f6f3] text-[#634820]" : "text-neutral-500"}`;
    };

    return (
        <div className="sticky top-0">
            {showNavBar &&
                <div className="flex gap-2 bg-[#eee8df] p-2 justify-between w-full">
                    <div>
                        <NavLink to="/customers">
                            <button
                                className={getLinkClass("/customers")}
                            >
                                <UserGroup />
                                Customers
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/distributors">
                            <button
                                className={getLinkClass("/distributors")}                            >
                                <Truck />
                                Distributors
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/orders">
                            <button
                                className={getLinkClass("/orders")}
                            >
                                <ClipboardList />
                                My Orders
                            </button>
                        </NavLink>
                    </div>
                </div>}
        </div>
    )
}
