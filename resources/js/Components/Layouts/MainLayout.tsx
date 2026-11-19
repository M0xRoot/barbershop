import { Outlet } from "react-router";
import VerticalNav from "../Nav/VerticalNav";
import HorizontalNav from "../Nav/HorizontalNav";

export const MainLayout = () => {
    return (
        <div className="flex min-h-screen">
            <VerticalNav />
            <div className="flex-1 min-w-0">
                <HorizontalNav />
                <div>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};
