import { Request, Response } from "express";
import { IAddressRepository } from "../../../interfaces/IAddressRepository";
import { ListAddressService } from "../../../services/address/ListAddressService";

export class ListAddressController{
    constructor(private addRepo: IAddressRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const listAddressService = new ListAddressService(this.addRepo)
        const addresses = await listAddressService.execute()

        return res.json(addresses)
    }
}