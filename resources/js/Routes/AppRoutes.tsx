import { Routes, Route, Navigate } from "react-router";
import AuthLayout from "@/Components/Layouts/AuthLayout";
import { MainLayout } from "@/Components/Layouts/MainLayout";
import Dashboard from "@/Pages/dashboard/Dashboard";
import ProtectedRoute from "@/Routes/ProtectedRoute";
import Auth from "@/Pages/Auth/Auth";
import Users from "@/Pages/Users/Users";
import Ads from "@/Pages/Ads/Ads";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Auth />} />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="ads/" element={<Ads />} />
                </Route>
            </Route>
        </Routes>
    );
}
