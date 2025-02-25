import { IAddress, IAddressGetByUserRequest } from "../../interfaces/IAddressInterface";
import { IAddressRepository } from "../../interfaces/IAddressRepository";

export class GetByUserAddressService{
    constructor(private addRepo: IAddressRepository){}
    async execute({ userId }: IAddressGetByUserRequest): Promise<IAddress[]>{
        const result = await this.addRepo.findAddressByUser(userId)

        return result
    }
}