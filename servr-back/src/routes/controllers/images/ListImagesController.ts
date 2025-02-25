import { Request, Response } from "express";
import { IImagesRepository } from "../../../interfaces/IImagesRepository";
import { ListImageService } from "../../../services/images/ListImagesService";

export class ListImagesController{
    constructor(private imageRepo: IImagesRepository){}

    async handle(_: Request, res: Response): Promise<Response>{
        const listImagesService = new ListImageService(this.imageRepo)
        const result = await listImagesService.execute()

        return res.json(result)
    }
}