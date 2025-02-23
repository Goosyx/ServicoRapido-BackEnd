import { IAddress } from "../../interfaces/IAddressInterface";
import { IAddressRepository } from "../../interfaces/IAddressRepository";

export class ListAddressService{
    constructor(private addRepo: IAddressRepository){}
    async execute(): Promise<IAddress[]>{
        const result = await this.addRepo.findAll();

        return result
    }
}