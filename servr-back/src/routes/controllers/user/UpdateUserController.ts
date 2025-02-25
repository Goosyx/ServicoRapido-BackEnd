import { Request, Response } from "express";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { IUser } from "../../../interfaces/IUserInterface";
import { UpdateUserService } from "../../../services/user/UpdateUserService";
import { IHashRepository } from "../../../interfaces/IHashRepository";

export class UpdateUserController{
    constructor(private userRepo: IUserRepository, private hashRepo: IHashRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } =req.params;
        const {name, email, password, confirmEmail, confirmPassword }: IUser = req.body;
        
        const updateUserService = new UpdateUserService(this.userRepo, this.hashRepo)
        
        await updateUserService.execute({
            id, 
            name, 
            email, 
            password,
            confirmEmail,
            confirmPassword
        })

        return res.status(201).json()
    }
}
