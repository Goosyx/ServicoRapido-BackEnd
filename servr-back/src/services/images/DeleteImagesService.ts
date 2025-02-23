import { IImagesDeleteRequest } from "../../interfaces/IImagesInterface";
import { IImagesRepository } from "../../interfaces/IImagesRepository";

export class DeleteImageService{
    constructor(private imageRepo: IImagesRepository){}
    async execute({id}: IImagesDeleteRequest): Promise<void>{
        await this.imageRepo.delete(id)
    }
}