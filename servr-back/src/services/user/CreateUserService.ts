import { User } from "../../entities/user";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser, IUserCreateRequest } from "../../interfaces/IUserInterface";
import { AppError } from "../../errors/AppError";
import { validateEmail, validatePassword, validateConfirmEmail, validateConfirmPassword, validateCpf, validateCnpj } from "../../utils/validade";
import { IHashRepository } from "../../interfaces/IHashRepository";


export class CreateUserService{
    constructor(
        private userRepo: IUserRepository,
        private hashRepo: IHashRepository
    ){}
    async execute({
        name, email, password, cpf, cnpj, userType, confirmEmail, confirmPassword
    }: IUserCreateRequest): Promise<IUser>
{

    if (!validateEmail(email)){
        throw new AppError('Email inválido')
    }
     
    if(!validatePassword(password)){
        throw new AppError('A senha não atende os requisitos')
    }

    if(confirmEmail && !validateConfirmEmail(confirmEmail, email)){
        throw new AppError('Email ou senha não são iguais')
    }

    if(confirmPassword && !validateConfirmPassword(confirmPassword, password)){
        throw new AppError('Email ou senha não são iguais')
    } 

    if(cpf && !validateCpf){
        throw new AppError('CPF inválido')
    }

    if(cnpj && !validateCnpj){
        throw new AppError('Cnpj inválido')
    }

    password = await this.hashRepo.cryptographie(password)

    const user = new User({
        name,
        email,
        password,
        cpf,
        cnpj,
        userType
    })

    let userdata = user.toJSON();

    await this.userRepo.insert(userdata);

    return {...userdata};
}}