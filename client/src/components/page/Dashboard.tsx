

export default function Dashboard() {
    return (
        <div className="p-4 w-full">
            <div className="p-4 flex gap-3 justify-between">
                <div className="bg-white flex flex-col gap-1 p-4 py-2 rounded-xl">
                    <span className="text-sm text-gray-500">Total Customers</span>
                    <span className="text-2xl font-bold">84,43,434</span>
                    <span className="text-xs text-emerald-600">10% Increment</span>
                </div>
                <div className="bg-white flex flex-col gap-1 p-4 py-2 rounded-xl">
                    <span className="text-sm text-gray-500">Total Revenue</span>
                    <span className="text-2xl font-bold">2,00,00,000</span>
                    <span className="text-xs text-emerald-600">25% Profit</span>
                </div>
                <div className="bg-white flex flex-col gap-1 p-4 py-2 rounded-xl">
                    <span className="text-sm text-gray-500">Total Orders</span>
                    <span className="text-2xl font-bold">7,36,43,894</span>
                    <span className="text-xs text-emerald-600">20% Increment</span>
                </div>
                <div className="bg-white flex flex-col gap-1 p-4 py-2 rounded-xl">
                    <span className="text-sm text-gray-500">Total Distributors</span>
                    <span className="text-2xl font-bold">1,20,190</span>
                    <span className="text-xs text-emerald-600">10% Increment</span>
                </div>
                <div className="bg-white flex flex-col gap-1 p-4 py-2 rounded-xl">
                    <span className="text-sm text-gray-500">Total Salesman</span>
                    <span className="text-2xl font-bold">80,845</span>
                    <span className="text-xs text-red-600">5% Decrement</span>
                </div>
                <div className="bg-white flex flex-col gap-1 p-4 py-2 rounded-xl">
                    <span className="text-sm text-gray-500">Total Products</span>
                    <span className="text-2xl font-bold">3,038</span>
                    <span className="text-xs text-emerald-600">20% Increment</span>
                </div>
            </div>
            <div className="p-4 flex justify-between">
                <div>
                    <img src="/dummy-graph.jpeg" alt="" className="w-200 h-70 rounded-2xl" />
                </div>
                <div className="bg-white px-3 py-1.5 rounded-2xl">
                    Recent Expenses:
                    <ul>
                        <li>
                            1. Lorem ipsum dolor dsjkdsa -10
                        </li>
                        <li>
                            1. Lorem ipsum dolor  dfsaf 30
                        </li><li>
                            1. Lorem ipsum dolor  dsf -10
                        </li><li>
                            1. Lorem ipsum dolor  fs  fdfds-10
                        </li><li>
                            1. Lorem ipsum dolor sdfsdf -10
                        </li><li>
                            1. Lorem ipsum dolor fsd f -10
                        </li>
                        <li>
                            1. Lorem ipsum dolor dsfa -10
                        </li><li>
                            1. Lorem ipsum dolor  fsdfa -10
                        </li><li>
                            1. Lorem ipsum dolor  fdsf -10
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}