import { ClipboardList, Truck, UserGroup } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {

    const location = useLocation();
    const hideNavBarPaths = ['/', '/createPrimaryOrder/', '/createSecondaryOrder/'];

    const showNavBar = !hideNavBarPaths.some((path) =>
        path === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(path)
    );


    const getLinkClass = (path: string) => {
        const isActive = location.pathname === path;
        return `flex flex-col items-center justify-center px-2 py-1 rounded-lg ${isActive ? "bg-[#f8f6f3] text-[#634820]" : "text-neutral-600"}`;
    };

    return (
        <div className="sticky top-0 mt-4">
            {showNavBar &&
                <div className="flex gap-2 bg-[#eee8df] p-2 justify-between m-2 rounded-lg shadow-lg">
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
