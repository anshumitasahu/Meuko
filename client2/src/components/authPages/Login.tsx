import { useState } from "react";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                
            >
                Login
            </button>
        </div>
    )
}