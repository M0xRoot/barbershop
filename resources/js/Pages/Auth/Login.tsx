import { LoginProps } from "@/Types/Types";
import LoginCard from "@/Components/Cards/LoginCard";

export default function Login({ email, password }: LoginProps) {
    return (
        <>
            <LoginCard>
                <div className="flex justify-center items-center flex-col gap-2">
                    <span className="text-2xl font-normal text-shadow-lg">
                        Log in to your account
                    </span>
                    <span className="text-gray-600 text-shadow-2xs">
                        Welcome back! Please enter your details.
                    </span>
                </div>
                <div className="flex flex-row border border-gray-400 rounded-lg">
                    <button className="h-10 w-35 rounded-lg border border-gray-400">
                        Sign up
                    </button>
                    <button className="h-10 w-35 rounded-lg border border-gray-400">
                        Log in
                    </button>
                </div>
                <div className="flex flex-col gap-0.5 justify-center">
                    <label htmlFor="email" className="text-xl">
                        Email
                    </label>
                    <input
                        className=" w-full rounded-lg border-gray-400 border"
                        type="email"
                    />
                    <label htmlFor="password" className="text-xl">
                        Password
                    </label>
                    <input
                        className="rounded-lg border border-gray-400"
                        type="password"
                    />
                </div>
                <div className="flex flex-row gap-20">
                    <div className="flex flex-row gap-1">
                        <input type="checkbox" />
                        <span>Remember me?</span>
                    </div>
                    <button className="underline text-blue-500">
                        Forgot password
                    </button>
                </div>
                <div className="flex justify-center items-center w-full">
                    <button className="h-12 w-80 text-lg text-white  bg-primary hover:bg-primary-hover shadow-2xl rounded-lg cursor-pointer">
                        Sign in
                    </button>
                </div>
                <div>
                    <span className="flex flex-row gap-1">
                        Don't have an account?
                        <button className="underline text-blue-500">
                            Sign up
                        </button>
                    </span>
                </div>
            </LoginCard>
        </>
    );
}
