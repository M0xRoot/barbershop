import { useMutation } from "@tanstack/react-query";
import { login } from "@/Features/Api/Auth/Auth.api";
import { toast } from "sonner";
import { AxiosError } from "axios";

export default function useLogin() {
    return useMutation({
        mutationFn: login,

        onSuccess: (data) => {
            toast.success(data.message);
        },

        onError: (error) => {
            if (error instanceof AxiosError)
                toast.error(error.response?.data?.message ?? error.message);
        },
    });
}
