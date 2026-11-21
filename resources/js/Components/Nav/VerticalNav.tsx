import nextChairIcon from "@/Assets/Icons/nextChairIcon.png";
import { NavLinks } from "@/Utils/Navigation/NavLink";
import { NavLink } from "react-router";
import { VerticalNavProps } from "@/Types/Types";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function VerticalNav({
    isVisibleNav,
    setIsVisibleNav,
}: VerticalNavProps) {
    return (
        <>
            <aside
                className={`group shrink-0 bg-card min-h-screen shadow-2xl overflow-hidden transition-all duration-200 ease-in-out absolute z-100 ${isVisibleNav ? "w-64  opacity-100" : "w-0"} md:relative md:flex md:w-16 md:z-auto md:opacity-100 md:hover:w-64 lg:hover:w-64`}
            >
                <nav className="w-full p-2 flex flex-col gap-10">
                    <div className="p-2 sm:hidden flex justify-end">
                        <button
                            className="cursor-pointer hover:text-primary transition-all duration-200"
                            onClick={() => setIsVisibleNav(false)}
                        >
                            <IoCloseCircleOutline size={24} />
                        </button>
                    </div>
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
                                    end={item.path === "/admin"}
                                    className={({ isActive }) =>
                                        `min-w-0 flex items-center gap-5 h-10 px-3 rounded-sm transition-all ${
                                            isActive
                                                ? "bg-primary text-background"
                                                : "text-foreground hover:bg-primary hover:text-background"
                                        } ${isVisibleNav ? "justify-start" : "justify-center md:group-hover:justify-start"}`
                                    }
                                >
                                    <Icon size={20} className="shrink-0" />

                                    <span
                                        className={`whitespace-nowrap transition-opacity duration-200 ${isVisibleNav ? "inline" : "hidden"}
                                            md:hidden lg:hidden md:group-hover:inline`}
                                    >
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
