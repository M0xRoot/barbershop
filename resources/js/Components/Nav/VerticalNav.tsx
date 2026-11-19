import nextChairIcon from "@/Assets/Icons/nextChairIcon.png";
import { NavLinks } from "@/Utils/Navigation/NavLink";
import { NavLink } from "react-router";

export default function VerticalNav() {
    return (
        <>
            <aside className="group hidden md:flex lg:flex bg-card w-16 hover:w-64 shrink-0 min-h-screen shadow-2xl transition-all duration-200 overflow-hidden">
                <nav className="w-full p-2 flex flex-col gap-10">
                    <div className="flex flex-col gap-20">
                        <div className="p-2 flex justify-center items-center flex-col gap-2">
                            <img
                                src={nextChairIcon}
                                alt="Next Chair"
                                className="w-10 h-10"
                            />
                        </div>

                        {NavLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end={item.path === "/"}
                                    className={({ isActive }) =>
                                        `min-w-0 flex items-center justify-center gap-5 h-10 px-3 rounded-sm transition-all ${
                                            isActive
                                                ? "bg-primary text-background"
                                                : "text-foreground hover:bg-primary hover:text-background"
                                        }`
                                    }
                                >
                                    <Icon size={20} className="shrink-0" />

                                    <span className="hidden group-hover:inline transition-opacity duration-200 whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </NavLink>
                            );
                        })}
                    </div>
                </nav>
            </aside>
        </>
    );
}
