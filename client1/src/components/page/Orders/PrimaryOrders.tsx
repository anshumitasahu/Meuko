import { Plus } from "lucide-react";

export default function PrimaryOrder() {
    return (
        <div className="py-8 w-full">
            <h1 className="text-md pb-4 font-bold text-[#352206]">Primary Orders</h1>
            <div className="pb-4 flex justify-between">
                <input
                    type="text"
                    placeholder="Search Orders"
                    className="p-2 px-3 text-sm border border-[#e4daca] rounded-lg outline-0 focus:ring ring-[#d6c8b3] bg-white/70"
                />
                <button
                    className="flex gap-2 text-white bg-[#352206] px-2 py-1 rounded-lg items-center justify-center text-sm hover:cursor-pointer"
                >
                    <Plus />Add Orders
                </button>
            </div>

            <table className="w-full border-separate border-spacing-0">
                <thead>
                    <tr
                        className="text-md text-left text-[#211400]"
                    >
                        <th className="p-3 bg-[#D2C9BD]">tjd</th>
                        <th className="p-3 bg-[#D2C9BD]">tjd</th>
                        <th className="p-3 bg-[#D2C9BD]">tjd</th>
                        <th className="p-3 bg-[#D2C9BD]">tjd</th>
                        <th className="p-3 bg-[#D2C9BD]">tjd</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        className="text-sm hover:bg-[#ebe3d8]"
                    >
                        <td className="p-5text-center text-gray-500">thdj</td>
                        <td className="p-5text-center text-gray-500">thdj</td>
                        <td className="p-5text-center text-gray-500">thdj</td>
                        <td className="p-5text-center text-gray-500">thdj</td>
                        <td className="p-5text-center text-gray-500">thdj</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}