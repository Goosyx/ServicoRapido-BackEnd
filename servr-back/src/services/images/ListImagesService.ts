import { IImages } from "../../interfaces/IImagesInterface";
import { IImagesRepository } from "../../interfaces/IImagesRepository";

export class ListImageService{
    constructor(private imageRepo: IImagesRepository){}
    async execute(): Promise<IImages[]>{
        const images = await this.imageRepo.findAll()

        return images
    }
}