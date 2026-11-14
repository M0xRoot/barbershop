import { useState } from "react";
import "./Assets/Styles/Style.css";
import Auth from "./Pages/Auth/Auth";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
    const [queryClient] = useState(() => new QueryClient()); // QueryClient manages query caching

    //QueryClientProvider make the client accessible to react components
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Auth />
                <Toaster position="top-right" richColors />
            </QueryClientProvider>
        </>
    );
}
