import { IAddress, IAddressGetRequest } from "../../interfaces/IAddressInterface";
import { IAddressRepository } from "../../interfaces/IAddressRepository";

export class GetAddressService{
    constructor(private addRepo: IAddressRepository){}
    async execute({ id }: IAddressGetRequest): Promise<IAddress>{
        const result = await this.addRepo.findAddress(id)

        return result
    }
}