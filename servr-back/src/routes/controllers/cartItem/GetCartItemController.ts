import { Request, Response } from "express";
import { ICartItemRepository } from "../../../interfaces/ICartItemRepository";
import { GetCartItemService } from "../../../services/cartItem/GetCartItemService";

export class GetCartItemController {
  constructor(private cartItemRepo: ICartItemRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getCartItemService = new GetCartItemService(this.cartItemRepo);
    const result = await getCartItemService.execute({ id });
    return res.json(result);
  }
}
