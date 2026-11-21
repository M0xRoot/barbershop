import { useState } from "react";
import "./Assets/Styles/Style.css";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./Routes/AppRoutes";

export default function App() {
    const [queryClient] = useState(() => new QueryClient()); // QueryClient manages query caching

    //QueryClientProvider make the client accessible to react components
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppRoutes />
                <Toaster position="top-right" richColors />
            </QueryClientProvider>
        </>
    );
}
