import { Request, Response } from "express";
import { IImagesRepository } from "../../../interfaces/IImagesRepository";
import { CreateImageService } from "../../../services/images/CreateImagesService";

export class CreateImagesController{
    constructor(private imageRepo: IImagesRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const {productId, imageUrl} = req.body;

        const createImageService = new CreateImageService(this.imageRepo)
        
        const result = await createImageService.execute({productId, imageUrl})

        return res.status(201).json(result)
    }
}