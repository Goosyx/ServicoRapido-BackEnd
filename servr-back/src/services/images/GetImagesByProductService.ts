import { IImages, IImagesGetByProductRequest, IImagesGetRequest } from "../../interfaces/IImagesInterface";
import { IImagesRepository } from "../../interfaces/IImagesRepository";

export class GetImageByProductService{
    constructor(private imageRepo: IImagesRepository){}
    async execute({productId}: IImagesGetByProductRequest): Promise<IImages[]>{
        const result = await this.imageRepo.getByProduct(productId)

        return result
    }
}