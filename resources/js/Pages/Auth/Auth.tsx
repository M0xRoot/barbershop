import { LoginProps } from "@/Types/Types";
import AuthCard from "@/Components/Cards/AuthCard";
import nextChairIcon from "@/Assets/Icons/nextChairIcon.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import useLogin from "@/Features/Hooks/Auth/useLogin";
import { toast } from "sonner";

export default function Auth() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [credentials, setCredentials] = useState<LoginProps>({
        email: "",
        password: "",
    });
    const mutation = useLogin();

    const handleLogin = () => {
        if (!credentials.email.trim() || !credentials.password.trim()) {
            toast.warning("Please enter your email and password");
            return;
        }
        mutation.mutate(credentials);
    };

    return (
        <AuthCard>
            <div className="flex flex-col justify-center items-center gap-3 text-center">
                <img
                    src={nextChairIcon}
                    alt="Next chair"
                    width={48}
                    height={48}
                />
                <span className="text-3xl font-semibold tracking-wider">
                    NEXT CHAIR
                </span>

                <span className="text-2xl font-medium text-accent">
                    Log in to your account
                </span>
            </div>

            <div className="flex w-full flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={credentials.email}
                    onChange={(e) => {
                        setCredentials({
                            ...credentials,
                            email: e.target.value,
                        });
                    }}
                    className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Enter your email"
                />
                <label htmlFor="password" className="mt-3">
                    Password
                </label>
                <div className="relative w-full">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={credentials.password}
                        onChange={(e) => {
                            setCredentials({
                                ...credentials,
                                password: e.target.value,
                            });
                        }}
                        className="h-12 w-full rounded-lg border border-border bg-background px-4 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-accent cursor-pointer"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                </div>
            </div>

            <div className="flex w-full items-center justify-center text-sm">
                <button className="text-accent hover:underline cursor-pointer">
                    Forgot password?
                </button>
            </div>

            <button
                type="button"
                className="h-12 w-full rounded-lg bg-primary font-medium text-background transition hover:brightness-110 cursor-pointer"
                onClick={handleLogin}
                disabled={mutation.isPending}
            >
                {mutation.isPending ? "Signing in..." : "Sign in"}
            </button>
        </AuthCard>
    );
}
