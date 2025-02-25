import { Request, Response } from "express";
import { IAddressRepository } from "../../../interfaces/IAddressRepository";
import { UpdateAddressService } from "../../../services/address/UpdateAddressService";

export class UpdateAddressController{
    constructor(private addRepo: IAddressRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const { street,
            number,
            complement,
            city,
            state,
            zipCode } = req.body

            const updateAdresseService = new UpdateAddressService(this.addRepo)

            const result = await updateAdresseService.execute({id,street,
                number,
                complement,
                city,
                state,
                zipCode})

                return res.status(201).json(result)
    }
}