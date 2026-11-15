import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/Features/Api/Auth/Auth.api";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";

export default function useLogin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: login,

        onSuccess: async (data) => {
            toast.success(data.message);

            await queryClient.invalidateQueries({
                queryKey: ["auth", "user"],
            });

            navigate("/admin");
        },

        onError: (error) => {
            if (error instanceof AxiosError)
                toast.error(error.response?.data?.message ?? error.message);
        },
    });
}
