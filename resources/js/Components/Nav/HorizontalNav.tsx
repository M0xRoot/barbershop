import { NavLink } from "react-router";
import { FiSearch, FiUser } from "react-icons/fi";

export default function HorizontalNav() {
    const Icon = FiUser;
    const SearchIcon = FiSearch;

    return (
        <aside className="bg-card w-full lg:w-[100vh] md:w-[25vh] h-15 mx-auto shadow-2xl flex flex-row justify-center md:rounded-b-2xl lg:rounded-b-2xl">
            <nav className="p-4 w-full flex flex-row justify-between items-center">
                <div className="hidden md:flex px-2 gap-0.5 border border-muted rounded-2xl items-center">
                    <SearchIcon size={18} className="text-muted" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="p-2 text-sm outline-none focus:ring-0"
                    />
                </div>

                <NavLink to="/profile" className="hidden lg:inline">
                    <Icon
                        size={30}
                        className="rounded-full border border-muted text-muted hover:text-primary"
                    />
                </NavLink>
            </nav>
        </aside>
    );
}
