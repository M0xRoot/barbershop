import { Outlet } from "react-router";
import VerticalNav from "../Nav/VerticalNav";
import HorizontalNav from "../Nav/HorizontalNav";
import { useState } from "react";

export const MainLayout = () => {
    const [isVisibleNav, setIsVisibleNav] = useState<boolean>(false);
    return (
        <div className="flex min-h-screen">
            <VerticalNav
                isVisibleNav={isVisibleNav}
                setIsVisibleNav={setIsVisibleNav}
            />
            <div className="flex-1 min-w-0">
                <HorizontalNav setIsVisibleNav={setIsVisibleNav} />
                <main className="p-4 w-full flex justify-center">
                    <div className="flex-1 w-full min-h-screen bg-card rounded-lg">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};
