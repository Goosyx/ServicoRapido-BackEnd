import { Request, Response } from "express";
import { IAddressRepository } from "../../../interfaces/IAddressRepository";
import { GetAddressService } from "../../../services/address/GetAddressService";

export class GetAddressController{
    constructor(private addRepo: IAddressRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const getAddressService = new GetAddressService(this.addRepo)

        const result = await getAddressService.execute({ id })

        return res.json(result)
    }
}