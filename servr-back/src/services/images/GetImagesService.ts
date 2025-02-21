import { IImages, IImagesGetRequest } from "../../interfaces/IImagesInterface";
import { IImagesRepository } from "../../interfaces/IImagesRepository";

export class GetImageService{
    constructor(private imageRepo: IImagesRepository){}
    async execute({id}: IImagesGetRequest): Promise<IImages>{
        const result = await this.imageRepo.findOneImage(id)

        return result
    }
}