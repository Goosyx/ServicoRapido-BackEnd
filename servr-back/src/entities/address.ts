import { IAddress } from "../interfaces/IAddressInterface";
import { createUUID } from "../utils/createUUID";

export class Address{
    id: IAddress['id']
    userId: IAddress['id']
    street: IAddress['street']
    number: IAddress['number']
    complement: IAddress['complement']
    city: IAddress['city']
    state: IAddress['state']
    zipCode: IAddress['zipCode']
    createdAt?: IAddress['createdAt']
    updatedAt?: IAddress['updatedAt']

    constructor(props: Omit<IAddress, 'id'>, id?: string){
        this.id = id || createUUID();
        this.userId = props.userId;
        this.street = props.street;
        this.number = props.number;
        this.complement = props.complement;
        this.city = props.city;
        this.state = props.state;
        this.zipCode = props.zipCode;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date()
    }

    toJson(): IAddress{
        return {
            id: this.id,
            userId: this.userId,
            street: this.street,
            number: this.number,
            complement: this.complement,
            city: this.city,
            state: this.state,
            zipCode: this.zipCode,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}