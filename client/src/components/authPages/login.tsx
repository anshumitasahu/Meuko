export default function Login() {
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
                            <input type="email" placeholder="ENter your Email" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Password</span>
                            <input type="password" placeholder="Enter your Password" />
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
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}