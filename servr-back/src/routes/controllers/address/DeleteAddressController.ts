import { Request, Response } from "express";
import { IAddressRepository } from "../../../interfaces/IAddressRepository";
import { DeleteAddressService } from "../../../services/address/DeleteAddressService";

export class DeleteAddressController{
    constructor(private addRepo: IAddressRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deleteAddressController = new DeleteAddressService(this.addRepo)

        await deleteAddressController.execute({ id })

        return res.status(200).send()
    }
}