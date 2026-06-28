import { Search, Bell, Moon } from "lucide-react";

function Topbar() {

    return (

        <div className="h-20 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-8">

            <div className="relative">

                <Search
                    className="absolute left-4 top-3 text-gray-400"
                    size={18}
                />

                <input
                    placeholder="Search..."
                    className="pl-12 pr-4 py-3 rounded-xl border border-[#E2E8F0] w-96"
                />

            </div>

            <div className="flex gap-5">

                <Bell />

                <Moon />

            </div>

        </div>

    )

}

export default Topbar;