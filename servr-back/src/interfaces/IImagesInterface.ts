export interface IImages{
    id: string;
    productId: string;
    imageUrl: string;
    createdAt?: Date
    updatedAt?: Date
}

export interface IImagesCreateRequest{
    productId: string;
    imageUrl: string;
}

export interface IImagesGetRequest{
    id: string;
}

export interface IImagesDeleteRequest{
    id: string
}

export interface IImagesGetByProductRequest{
    productId: string;
}

export interface IImagesDeleteByProductRequest{
    productId: string;
}