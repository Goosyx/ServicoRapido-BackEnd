export interface IAddress{
    id: string
    userId: string
    street: string
    number?: string
    complement?: string
    city: string
    state: string
    zipCode: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IAddressCreateRequest{
    userId: string
    street: string
    number?: string
    complement?: string
    city: string
    state: string
    zipCode: string
}

export interface IAddressGetRequest{
    id: string
}

export interface IAddressUpdateRequest{
    id: string
    street: string
    number?: string
    complement?: string
    city: string
    state: string
    zipCode: string
}

export interface IAddressDeleteRequest{
    id: string
}

export interface IAddressGetByUserRequest{
    userId: string;
}