import { NavigationItem } from "@/Types/Types";
import { FiUsers, FiSettings, FiUser } from "react-icons/fi";
import { RiAdvertisementLine, RiServiceLine } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";

export const NavLinks: NavigationItem[] = [
    {
        label: "Dashboard",
        icon: MdOutlineSpaceDashboard,
        path: "/admin",
    },
    {
        label: "Users",
        icon: FiUsers,
        path: "/admin/users",
    },
    {
        label: "Ads",
        icon: RiAdvertisementLine,
        path: "/admin/ads",
    },
    {
        label: "Services",
        icon: RiServiceLine,
        path: "/admin/services",
    },
    {
        label: "Settings",
        icon: FiSettings,
        path: "/admin/settings",
    },
    {
        label: "Profile",
        icon: FiUser,
        path: "/admin/profile",
    },
];
