import { Address } from "../../entities/address";
import { IAddress, IAddressCreateRequest } from "../../interfaces/IAddressInterface";
import { IAddressRepository } from "../../interfaces/IAddressRepository";

export class CreateAddressService{
    constructor(private addRepo: IAddressRepository){}
    async execute({
        userId,
        street,
        number,
        complement,
        city,
        state,
        zipCode
    }: IAddressCreateRequest): Promise<IAddress>{

        const address = new Address({
            userId,
            street,
            number,
            complement,
            city,
            state,
            zipCode
        })

        const result = await this.addRepo.insert({id: address.id, userId, street, number, complement, city, state, zipCode})

        return result
    }
}