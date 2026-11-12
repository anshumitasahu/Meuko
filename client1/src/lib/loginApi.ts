import { useMutation } from "@tanstack/react-query"
import type { AdminLogin, UseAdminLogin } from "../types/types"
import axios from "axios"
import { API_ROUTES } from "./api"

export const useLoginAdmin = ({ setEmail, setPassword }: UseAdminLogin) => {
    return useMutation({
        mutationFn: async (data: AdminLogin) => {
            const res = await axios.post<Response>(API_ROUTES.USEADMINLOGIN.POST, data, {
                withCredentials: true
            });

            return res.data
        },
        onSuccess: () => {
            alert("Login Successfull");

            setEmail("");
            setPassword("");
        }
    })
}