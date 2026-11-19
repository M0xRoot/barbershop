import { NavigationItem } from "@/Types/Types";
import {
    FiGrid,
    FiCalendar,
    FiUsers,
    FiScissors,
    FiSettings,
    FiUser,
} from "react-icons/fi";

export const NavLinks: NavigationItem[] = [
    {
        label: "Dashboard",
        icon: FiGrid,
        path: "/admin",
    },
    {
        label: "Appointments",
        icon: FiCalendar,
        path: "/appointments",
    },
    {
        label: "Clients",
        icon: FiUsers,
        path: "/clients",
    },
    {
        label: "Services",
        icon: FiScissors,
        path: "/services",
    },
    {
        label: "Settings",
        icon: FiSettings,
        path: "/settings",
    },
    {
        label: "Profile",
        icon: FiUser,
        path: "/profile",
    },
];
