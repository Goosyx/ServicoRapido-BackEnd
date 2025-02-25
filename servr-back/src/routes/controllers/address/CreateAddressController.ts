import { Request, Response } from "express";
import { IAddressRepository } from "../../../interfaces/IAddressRepository";
import { CreateAddressService } from "../../../services/address/CreateAddressService";

export class CreateAddressController{
    constructor(private addRepo: IAddressRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const{
            userId,
            street,
            number,
            complement,
            city,
            state,
            zipCode 
        } = req.body;

        const createAddressService = new CreateAddressService(this.addRepo)

        const result = await createAddressService.execute(req.body)

        return res.status(201).json()
    }
}