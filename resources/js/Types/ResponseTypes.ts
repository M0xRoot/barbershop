export type LoginResponse = {
    message: string;
    status: "success" | "error";
};

export type AuthUser = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
};
