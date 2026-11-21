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
    price: number
    createdAt: Date
    updatedAt: Date
    isActive: Boolean
}

export interface Product extends BaseEntity {
    name: string
    price: number
}

export interface ProductQueryResponse extends Response {
    data: Product[]
}

export interface CreateCustomersProps {
    name: string
    phone: string
    address: string
    email: string
    createdAt: Date
    updatedAt: Date
    isActive: Boolean
}

export interface Customers extends BaseEntity {
    name: string
    phone: string
    address: string
    email: string
}

export interface CustomersQueryResponse extends Response {
    data: Customers[]
}

export interface CreateSalesmanProps {
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    isActive: Boolean
}

export interface Salesmen extends BaseEntity {
    name: string
    email: string
}

export interface SalesmenQueryRespone extends Response {
    data: Salesmen[]
}

export interface CreateDistributorProps {
    name: string
    email: string
    phone: string
    address: string
    createdAt: Date
    updatedAt: Date
    isActive: Boolean
}

export interface Distributor extends BaseEntity {
    name: string
    phone: string
    email: string
    address: string
}

export interface DistributorQueryResponse extends Response {
    data: Distributor[]
}