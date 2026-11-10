import { ReactNode } from "react";

export default function LoginCard({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="h-full flex justify-center items-center">
                <div className="h-150 w-125 gap-5 flex justify-center items-center flex-col border border-gray-400 shadow-lg border-none rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
