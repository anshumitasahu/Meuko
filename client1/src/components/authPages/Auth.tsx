import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import axios from "axios";
import { API_ROUTES } from "../../lib/api";

export default function Auth({
    children
}: {
    children: ReactNode;
}) {

    const { isLoading, isError, data } = useQuery({
        queryKey: ["me"],

        queryFn: async () => {
            const res = await axios.get(API_ROUTES.ME.GET, {
                withCredentials: true,
            });

            return res.data;
        },

        retry: false,
    });

    if (isLoading) {
        return <div>Loading..</div>;
    }

    if (isError || !data?.success) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
}