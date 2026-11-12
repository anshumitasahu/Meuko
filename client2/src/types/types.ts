export interface Response {
    success: boolean;
    message: string;
}

export interface SalesmanLogin {
    email: string;
    password: string;
}

export interface UseSalesmanLogin {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}