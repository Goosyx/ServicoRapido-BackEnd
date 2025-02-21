import { Request, Response } from "express";
import { ListProductService } from "../../../services/product/ListProductService";
import { IProductRepository } from "../../../interfaces/IProductRepository";

export class ListProductController{
    constructor(private productRepo: IProductRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const listProductService = new ListProductService(this.productRepo)
        const products = await listProductService.execute()

        return res.json(products)
    }
}