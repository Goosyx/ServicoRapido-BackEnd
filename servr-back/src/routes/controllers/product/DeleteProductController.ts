import { Request, Response } from "express";
import { IProductRepository } from "../../../interfaces/IProductRepository";
import { DeleteProductService } from "../../../services/product/DeleteProductService";
import { IImagesRepository } from "../../../interfaces/IImagesRepository";

export class DeleteProductController {
    constructor(private productRepo: IProductRepository, private imageRepo: IImagesRepository) {}
    async handle(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;
  
      const deleteProductService = new DeleteProductService(this.productRepo, this.imageRepo);
      await deleteProductService.execute({ id });
  
      return res.status(200).send();
    }
  }