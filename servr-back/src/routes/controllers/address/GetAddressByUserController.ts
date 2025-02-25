import { Request, Response } from "express";
import { IAddressRepository } from "../../../interfaces/IAddressRepository";
import { GetByUserAddressService } from "../../../services/address/GetAddressByUserService";

export class GetByUserAddressController{
    constructor(private addRepo: IAddressRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
       const { userId } = req.params;
       
       const getAddressByUserService= new GetByUserAddressService(this.addRepo)

       const result = await getAddressByUserService.execute({ userId })

       return res.json(result)
    }
}