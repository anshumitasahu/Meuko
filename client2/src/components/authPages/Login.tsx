import { useEffect, useState } from "react";
import { useLoginSalesman } from "../../lib/loginApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginSalesMan = useLoginSalesman({ setEmail, setPassword })

    const handleLoginSalesman = () => {
        loginSalesMan.mutate({
            email,
            password
        })
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (loginSalesMan.isSuccess) {
            navigate("/customers")
        }
    }, [loginSalesMan.isSuccess])

    return (
        <div>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border"
            />
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border"
            />
            <button
                onClick={handleLoginSalesman}
            >
                Login
            </button>
        </div>
    )
}