import { IUser } from "../interfaces/IUserInterface";
import { createUUID } from "../utils/createUUID";

export class User{
    id: IUser['id'];
    name: IUser['name']
    email: IUser['email']
    password: IUser['password']
    cpf: IUser['cpf']
    cnpj: IUser['cnpj']
    userType: IUser['userType']
    confirmEmail: IUser['confirmEmail'];
    confirmPassword: IUser['confirmPassword'];
    createdAt: IUser['createdAt']
    updatedAt: IUser['updatedAt']

    constructor(props: Omit<IUser, 'id'>, id?:string){
        this.id =  id || createUUID();
        this.name = props.name;
        this.email = props.email;
        this.cpf = props.cpf;
        this.cnpj = props.cnpj;
        this.userType = props.userType;
        this.password = props.password;
        this.confirmEmail = props.confirmEmail;
        this.confirmPassword = props.confirmPassword;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date()
    }
    
    toJSON(): IUser{
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            cpf: this.cpf,
            cnpj: this.cnpj,
            userType: this.userType,
            password: this.password,
            confirmEmail: this.confirmEmail,
            confirmPassword: this.confirmPassword,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }

}