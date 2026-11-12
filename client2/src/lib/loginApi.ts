import { useMutation } from "@tanstack/react-query"
import type { SalesmanLogin, UseSalesmanLogin } from "../types/types"
import axios from "axios"
import { API_ROUTES } from "./api"

export const useLoginSalesman = ({ setEmail, setPassword }: UseSalesmanLogin) => {
    return useMutation({
        mutationFn: async (data: SalesmanLogin) => {
            const res = await axios.post<Response>(API_ROUTES.USESALESMANLOGIN.POST, data, {
                withCredentials: true
            });

            return res.data;
        },
        onSuccess: () => {
            alert("Login Successfull");

            setEmail("");
            setPassword("");
        }
    })
}