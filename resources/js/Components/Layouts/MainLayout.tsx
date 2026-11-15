import { Outlet } from "react-router";
import VerticalNav from "../Nav/VerticalNav";

export const MainLayout = () => {
    return (
        <div>
            <VerticalNav />
            <div>
                <nav></nav>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
