import { Address } from "../../entities/address";
import { IAddress, IAddressUpdateRequest } from "../../interfaces/IAddressInterface";
import { IAddressRepository } from "../../interfaces/IAddressRepository";

export class UpdateAddressService{
    constructor(private addRepo: IAddressRepository){}
    async execute({ id, street,
        number,
        complement,
        city,
        state,
        zipCode}: IAddressUpdateRequest): Promise<IAddress>{
            const add = await this.addRepo.findAddress(id)

            const address = new Address({
                userId: add.userId,
                street: street || add.street,
                number: number || add.number,
                complement: complement || add.complement,
                city: city || add.city,
                state: state || add.state,
                zipCode: zipCode || add.zipCode
            }, add.id)

            const result = await this.addRepo.update(address.toJson(), id)

            return result
        }
}