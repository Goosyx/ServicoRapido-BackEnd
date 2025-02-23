import { Request, Response } from "express";
import { IImagesRepository } from "../../../interfaces/IImagesRepository";
import { GetImageService } from "../../../services/images/GetImagesService";

export class GetImagesController{
    constructor(private imageRepo: IImagesRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const getImagesService = new GetImageService(this.imageRepo)

        const result = await getImagesService.execute({ id })

        return res.json(result)
    }
}