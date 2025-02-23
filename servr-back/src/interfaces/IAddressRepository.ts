import { IAddress } from "./IAddressInterface";

export interface IAddressRepository{
    findAll(): Promise<IAddress[]>
    findAddress(id: string): Promise<IAddress>
    findAddressByUser(id: string): Promise<IAddress[]>
    insert(props: IAddress): Promise<IAddress>
    update(props:IAddress, id: string): Promise<IAddress>
    delete(id: string): Promise<void>
}