export interface Response {
    success: boolean;
    message: string;
}

export interface AdminLogin {
    email: string,
    password: string;
}

export interface UseAdminLogin {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}