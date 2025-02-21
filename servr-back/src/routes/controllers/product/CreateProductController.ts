import { IImagesRepository } from "../../../interfaces/IImagesRepository";
import { IProductRepository } from "../../../interfaces/IProductRepository";
import { CreateProductService } from "../../../services/product/CreateProductService";
import { Request, Response } from "express";

export class CreateProductController{
    constructor(private productRepo: IProductRepository, private imageRepo: IImagesRepository){    }
    async handle(req: Request, res: Response): Promise<Response>{
        const {userId,
            title,
            description,
            price,
            quantity,
            color,
            size,
            materials,
            category,
            unit,
            weight, media} = req.body;

            const status: boolean = true;

        const createProductService = new CreateProductService(this.productRepo, this.imageRepo)
        const result = await createProductService.execute({userId,
            title,
            description,
            price,
            quantity,
            color,
            size,
            materials,
            category,
            unit,
            weight,
            status, media})
        return res.status(200).json(result)
    }
}