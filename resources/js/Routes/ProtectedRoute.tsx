import {Outlet, Navigate } from "react-router"
import useAuth from "@/Features/Hooks/Auth/useAuth";

export default function ProtectedRoute() {
    const {isError} = useAuth();

    if (isError) {
        return <Navigate to={"/login"} replace />
    }

    return <Outlet />
}
