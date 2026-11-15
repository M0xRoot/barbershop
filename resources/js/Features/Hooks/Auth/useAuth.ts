import { getAuthUser } from "@/Features/Api/Auth/Auth.api";
import { useQuery } from "@tanstack/react-query";

export default function useAuth() {
    return useQuery({
        queryKey: ["auth", "user"],
        queryFn: getAuthUser,
        retry: false,
    });
}
