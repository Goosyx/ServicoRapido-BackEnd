import { Images } from "../../entities/images";
import { IImages, IImagesCreateRequest } from "../../interfaces/IImagesInterface";
import { IImagesRepository } from "../../interfaces/IImagesRepository";

export class CreateImageService{
    constructor(private imageRepo: IImagesRepository){}
    async execute({ productId, imageUrl}: IImagesCreateRequest): Promise<IImages>{
        const image = new Images({productId, imageUrl});

        const result = await this.imageRepo.create(image.toJson())

        return result
    }
}