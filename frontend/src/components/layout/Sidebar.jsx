import {
    LayoutDashboard,
    MessageSquare,
    BookOpen,
    Brain,
    ClipboardList,
    BarChart3,
    Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";

const items = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: MessageSquare, label: "AI Chat", path: "/chat" },
    { icon: BookOpen, label: "Study", path: "/study" },
    { icon: Brain, label: "Flashcards", path: "/flashcards" },
    { icon: ClipboardList, label: "Quiz", path: "/quiz" },
    { icon: BarChart3, label: "Progress", path: "/progress" },
    { icon: Settings, label: "Settings", path: "/settings" }
];

function Sidebar() {

    return (

        <div className="w-72 bg-white border-r border-[#E2E8F0] h-screen p-6">

            <h1 className="text-2xl font-bold text-[#4F46E5] mb-10">
                StudyMind AI
            </h1>

            <div className="space-y-2">

                {
                    items.map((item, index) => {

                        const Icon = item.icon;

                        return (

                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                `
                                w-full
                                flex
                                items-center
                                gap-4
                                px-4
                                py-3
                                rounded-xl
                                transition

                                ${
                                    isActive
                                        ? "bg-[#4F46E5] text-white"
                                        : "hover:bg-[#F1F5F9] text-[#0F172A]"
                                }
                                `
                            }
                        >
                            <Icon size={20} />
                            {item.label}
                        </NavLink>

                        );

                    })
                }

            </div>

        </div>

    )

}

export default Sidebar;