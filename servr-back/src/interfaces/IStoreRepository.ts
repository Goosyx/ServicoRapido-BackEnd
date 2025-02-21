import { IStore } from "./IStoreInterface"

export interface IStoreRepository{
    findAll(): Promise<IStore[]>
    findByUser(id: string): Promise<IStore[]>
    findOneStore(id: string): Promise<IStore | null>
    insert(props: IStore): Promise<IStore>
    update(props: IStore): Promise<IStore>
    delete(id: string): Promise<void>
}