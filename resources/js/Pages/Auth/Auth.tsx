import { LoginProps } from "@/Types/Types";
import AuthCard from "@/Components/Cards/AuthCard";

export default function Auth({ email, password }: LoginProps) {
    return (
        <AuthCard>
            <div className="flex flex-col items-center gap-3 text-center">
                <span className="text-3xl font-semibold tracking-wider">
                    NEXT CHAIR
                </span>

                <span className="text-2xl font-medium text-accent">
                    Log in to your account
                </span>

                <span className="text-lg text-muted">
                    Welcome back! Please enter your details.
                </span>
            </div>

            <div className="flex w-full flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Enter your email"
                />

                <label htmlFor="password" className="mt-3">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Enter your password"
                />
            </div>

            <div className="flex w-full items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                </label>

                <button className="text-accent hover:underline">
                    Forgot password?
                </button>
            </div>

            <button className="h-12 w-full rounded-lg bg-primary font-medium text-background transition hover:brightness-110">
                Sign in
            </button>

            <div className="text-sm">
                Don't have an account?{" "}
                <button className="text-accent hover:underline">Sign up</button>
            </div>
        </AuthCard>
    );
}
