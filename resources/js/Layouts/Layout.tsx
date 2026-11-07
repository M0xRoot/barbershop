import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/create"></a>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
