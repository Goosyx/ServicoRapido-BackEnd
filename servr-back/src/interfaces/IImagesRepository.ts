import { IImages } from "./IImagesInterface";

export interface IImagesRepository{
    findAll(): Promise<IImages[]>
    findOneImage(id: string): Promise<IImages>
    create(props: IImages): Promise<IImages>
    delete(id: string): Promise<void>
    getByProduct(productId: string): Promise<IImages[]>
    deleteByProduct(productId: string): Promise<void>
}