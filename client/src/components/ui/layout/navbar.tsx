import { Box, Briefcase, LayoutDashboard, ShoppingBasket, Truck, Users } from "lucide-react"

export default function NavBar() {
    return (
        <div className="flex flex-col gap-3 bg-[#E6DED2] h-full w-65 p-8 text-[#211400]">
            <div className="flex items-center">
                <img src="./logo-1.png" alt="" className="w-15" />
                <div className="font-bold text-xl">Meuko</div>
            </div>
            <div className="w-full pt-8">
                <ul className="flex flex-col gap-2">
                    <li>
                        <button className="p-2 rounded-lg w-full text-left">
                            <div className="flex items-center gap-2 bg-[#D2C9BD] p-2 rounded-lg">
                                <LayoutDashboard />
                                <span>Dashboard</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="p-2 rounded-lg w-full text-left">
                            <div className="flex items-center gap-2 p-2 rounded-lg">
                                <Users />
                                <span>Customers</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="p-2 rounded-lg w-full text-left">
                            <div className="flex items-center gap-2 p-2 rounded-lg">
                                <Briefcase />
                                <span>Salesman</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="p-2 rounded-lg w-full text-left">
                            <div className="flex items-center gap-2 p-2 rounded-lg">
                                <Box />
                                <span>Product</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="p-2 rounded-lg w-full text-left">
                            <div className="flex items-center gap-2 p-2 rounded-lg">
                                <Truck />
                                <span>Distributor</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="p-2 rounded-lg w-full text-left">
                            <div className="flex items-center gap-2 p-2 rounded-lg">
                                <ShoppingBasket />
                                <span>Orders</span>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}