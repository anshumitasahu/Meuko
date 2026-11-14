export interface Response {
    success: boolean;
    message: string;
}

export interface AdminLogin {
    email: string
    password: string
}

export interface CreateProductsProps {
    name: string
    price: string
    createdAt: Date
    isActive: Boolean
}