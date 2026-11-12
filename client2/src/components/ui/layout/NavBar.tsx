import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <div>
                <NavLink to="/customers">
                    View Customers
                </NavLink>
            </div>
            <div>
                <NavLink to="/distributors">
                    View Distributors
                </NavLink>
            </div>
            <div>
                <NavLink to="/orders">
                    View orders
                </NavLink>
            </div>
        </div>
    )
}
