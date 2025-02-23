import { Request, Response } from "express";
import { IImagesRepository } from "../../../interfaces/IImagesRepository";
import { GetImageByProductService } from "../../../services/images/GetImagesByProductService";

export class GetImagesByProductController{
    constructor(private imageRepo: IImagesRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { productId } = req.params;

        const getImagesByProductService = new GetImageByProductService(this.imageRepo)

        const result = await getImagesByProductService.execute({ productId })

        return res.json(result)

    }
}