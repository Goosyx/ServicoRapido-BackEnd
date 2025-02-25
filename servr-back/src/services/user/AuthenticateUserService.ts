import { AppError } from "../../errors/AppError";
import { IAddressRepository } from "../../interfaces/IAddressRepository";
import { IHashRepository } from "../../interfaces/IHashRepository";
import { IJWTRepository } from "../../interfaces/IJWTRepository";
import { IUserAuthenticateRequest } from "../../interfaces/IUserInterface";
import { IUserRepository } from "../../interfaces/IUserRepository"; 

export class AuthenticateUserService {
    constructor(
        private userRepo: IUserRepository, 
        private jwtRepo: IJWTRepository, 
        private hashRepo: IHashRepository,
        private addressRepo: IAddressRepository
    ) { }
    
    async execute({email, password}: IUserAuthenticateRequest): Promise<Object | void> {
        const user = await this.userRepo.findByEmail(email);
        
        if(user) {
            const res = await this.hashRepo.uncryptographie(password, user.password)
            
            if(res) {
                const token = this.jwtRepo.generate({ email: user.email!, id: user.id })
                const address = await this.addressRepo.findAddressByUser(user.id)
                return { user, token, address }

            } else throw new AppError("incorrect email or password");

        } else throw new AppError("User doesn't exists");
    }
}