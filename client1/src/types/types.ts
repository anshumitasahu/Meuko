export interface Response {
    success: boolean;
    message: string;
}

export interface BaseEntity {
    createdAt: Date
    updatedAt: Date
    isActive: Boolean
    createdBy: string
    updatedBy: string
}

export interface AdminLogin {
    email: string
    password: string
}

export interface CreateProductsProps {
    name: string
    price: string
    createdAt: Date
    updatedAt: Date
    isActive: Boolean
}

export interface Product extends BaseEntity {
    name: string
    price: string
}

export interface ProductQueryResponse extends Response {
    data: Product[]
}