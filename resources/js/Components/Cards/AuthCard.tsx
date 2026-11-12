import { ReactNode } from "react";

export default function AuthCard({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center p-4">
                <div className="w-full max-w-md min-h-145 flex flex-col items-center justify-center gap-8 rounded-xl  bg-card p-8 shadow-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
