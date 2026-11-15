import API from "../Endpoints";
import { api } from "../Axios";
import type { LoginProps } from "@/Types/Types";
import type { AuthUser, LoginResponse } from "@/Types/ResponseTypes";
import getCsrf from "../Cookies";

export async function login(credentials: LoginProps): Promise<LoginResponse> {
    await getCsrf();

    const response = await api.post<LoginResponse>(
        API.ADMIN.AUTH.LOGIN,
        credentials,
    );

    return response.data;
}

export async function getAuthUser() {
    const response = await api.get<AuthUser>(API.ADMIN.AUTH.USER);

    return response.data;
}
