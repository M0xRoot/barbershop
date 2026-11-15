import { useState } from "react";
import "./Assets/Styles/Style.css";
import Auth from "./Pages/Auth/Auth";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router";
import AuthLayout from "./Components/Layouts/AuthLayout";
import { MainLayout } from "./Components/Layouts/MainLayout";
import Dashboard from "./Pages/dashboard/Dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";

export default function App() {
    const [queryClient] = useState(() => new QueryClient()); // QueryClient manages query caching

    //QueryClientProvider make the client accessible to react components
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/login" replace />}
                    ></Route>
                    <Route element={<AuthLayout />}>
                        <Route path="/login" element={<Auth />} />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route path="/admin" element={<MainLayout />}>
                            <Route index element={<Dashboard />} />
                        </Route>
                    </Route>
                </Routes>

                <Toaster position="top-right" richColors />
            </QueryClientProvider>
        </>
    );
}
