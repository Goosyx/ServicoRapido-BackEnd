export interface IUser{
    id: string
    name: string
    email: string
    password: string
    cpf?: string
    cnpj?: string
    confirmEmail?: string;
    confirmPassword?: string;
    userType: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IUserCreateRequest{
    name: string
    email: string
    password: string
    cpf?: string
    cnpj?: string
    userType: string
    confirmEmail?: string;
    confirmPassword?: string;
}

export interface IUserGetRequest{
    id: string
}

export interface IUserUpdateRequest{
    id:string
    name: string
    email: string
    password: string
    confirmEmail?: string;
    confirmPassword?: string;
}

export interface IUserDeleteRequest{
    id:string
}

export interface IUserAuthenticateRequest {
    email: string;
    password : string;
}
