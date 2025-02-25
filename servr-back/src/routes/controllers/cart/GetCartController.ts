import { Request, Response } from "express";
import { ICartRepository } from "../../../interfaces/ICartRepository";
import { GetCartService } from "../../../services/cart/GetCartService";

export class GetCartController {
  constructor(private cartRepo: ICartRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getCartService = new GetCartService(this.cartRepo);
    const result = await getCartService.execute({ id });
    return res.json(result);
  }
}
