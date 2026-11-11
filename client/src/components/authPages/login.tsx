import { useState } from "react"
import { useLoginAdmin } from "../../lib/loginApi";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginAdmin = useLoginAdmin({ setEmail, setPassword })

    const handleLoginAdmin = () => {
        loginAdmin.mutate({
            email,
            password
        })
    }

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