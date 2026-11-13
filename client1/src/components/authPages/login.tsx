import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_ROUTES } from "../../lib/api";
import type { LoginParams } from "../../models/auth/auth.models";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginAdmin = useMutation({
        mutationFn: async (data: LoginParams) => {
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

    const handleLoginAdmin = () => {
        loginAdmin.mutate({
            email,
            password
        })
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (loginAdmin.isSuccess) {
            navigate("/dashboard")
        }
    }, [loginAdmin.isSuccess])

    return (
        <div className="w-screen bg-[url('/LoginPage.png')] bg-cover bg-center bg-no-repeat">
            <div className="bg-white w-[50%] h-full p-10">
                <div className="p-2">
                    <div className="text-5xl">Welcome Back</div>
                    <div>Login to your Meuko account</div>
                    <div></div>
                </div>
                <div>
                    <div>
                        <div>
                            <span>Email</span>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Password</span>
                            <input
                                type="text"
                                placeholder="Enter your Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" />
                            <span>Remember Me</span>
                        </div>
                        <div>
                            Forgot Password?
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleLoginAdmin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}