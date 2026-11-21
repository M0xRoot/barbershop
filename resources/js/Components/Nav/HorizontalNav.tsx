import { NavLink } from "react-router";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { HorizotalNavProps } from "@/Types/Types";

export default function HorizontalNav({ setIsVisibleNav }: HorizotalNavProps) {
    return (
        <aside className="bg-card w-full lg:w-[100vh] md:w-[30vh] h-15 mx-auto shadow-2xl flex flex-row justify-center md:rounded-b-sm lg:rounded-b-sm">
            <nav className="p-4 w-full flex flex-row justify-start md:justify-center sm:justify-start lg:justify-between items-center">
                <div className="sm:hidden">
                    <button
                        className="cursor-pointer hover:text-primary transition-all duration-200"
                        onClick={() => setIsVisibleNav(true)}
                    >
                        <FiMenu size={24} />
                    </button>
                </div>
                <div className="hidden md:flex px-2 gap-0.5 border border-muted rounded-sm items-center hover:border-primary transition-all duration-200">
                    <FiSearch size={18} className="text-muted" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="p-2 text-sm outline-none focus:ring-0"
                    />
                </div>

                <NavLink to="/profile" className="hidden lg:inline">
                    <FiUser
                        size={30}
                        className="rounded-full border border-muted text-muted hover:border-primary hover:text-primary transition-all duration-200"
                    />
                </NavLink>
            </nav>
        </aside>
    );
}
