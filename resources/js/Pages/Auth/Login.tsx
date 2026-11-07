import { LoginProps } from "@/Types/Types";

export default function Login({ email, password }: LoginProps) {
    return (
        <>
            <div>
                <div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input className="" type="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className="hidden" type="password" />
                    </div>
                </div>
            </div>
        </>
    );
}
