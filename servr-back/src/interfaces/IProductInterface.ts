export interface IProduct{
    id: string;
    userId: string;
    title: string;
    description: string;
    price: number;
    status: boolean;
    quantity: number;
    color:string[];
    size: string[];
    materials: string[];
    category: string;
    unit: string;
    weight: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IProductCreateRequest{
    userId: string;
    title: string;
    description: string;
    price: number;
    status: boolean;
    quantity: number;
    color:string[];
    size: string[];
    materials: string[];
    category: string;
    unit: string;
    weight: number;
    media?: string[];
}

export interface IProductGetRequest{
    id: string;
}

export interface IProductUpdateRequest{
    id: string;
    title: string;
    description: string;
    price: number;
    status: boolean;
    quantity: number;
    color:string[];
    size: string[];
    materials: string[];
    category: string;
    unit: string;
    weight: number;
    media?: string[];
}

export interface IProductDeleteRequest{
    id: string;
}