import { Request, Response } from "express";
import { IProductRepository } from "../../../interfaces/IProductRepository";
import { GetProductByUserIdService } from "../../../services/product/GetProductByUserIdService";

export class GetProductByUserIdController {
  constructor(private productRepo: IProductRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params;

    const getProductByUserIdService = new GetProductByUserIdService(
      this.productRepo
    );
    const result = await getProductByUserIdService.execute(userId);

    return res.json(result);
  }
}
