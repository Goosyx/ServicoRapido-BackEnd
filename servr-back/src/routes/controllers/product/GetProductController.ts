import { Request, Response } from "express";
import { IProductRepository } from "../../../interfaces/IProductRepository";
import { GetProductService } from "../../../services/product/GetProductService";

export class GetProductController{
    constructor(private productRepo: IProductRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const getProductService = new GetProductService(this.productRepo)
        const result = await getProductService.execute({ id })

        return res.json(result)
    }
}