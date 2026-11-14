import { api } from "./Axios";

export default function getCsrf() {
    return api.get("/sanctum/csrf-cookie");
}
