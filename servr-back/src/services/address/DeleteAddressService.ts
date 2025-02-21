import { IAddressDeleteRequest } from "../../interfaces/IAddressInterface";
import { IAddressRepository } from "../../interfaces/IAddressRepository";

export class DeleteAddressService{
    constructor(private addRepo: IAddressRepository){}
    async execute({ id }: IAddressDeleteRequest): Promise<void>{
        await this.addRepo.delete(id)
    }
}