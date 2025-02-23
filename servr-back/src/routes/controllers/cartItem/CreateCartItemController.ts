import { Request, Response } from "express";
import { ICartItemRepository } from "../../../interfaces/ICartItemRepository";
import { CreateCartItemService } from "../../../services/cartItem/CreateCartItemService";

export class CreateCartItemController {
  constructor(private cartItemRepo: ICartItemRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { cartId, id, productId, quantity, productColor, productSize } =
      req.body;

    const createCartItemService = new CreateCartItemService(this.cartItemRepo);

    const cartItem = await createCartItemService.execute({
      cartId,
      id,
      productId,
      quantity,
      productColor,
      productSize,
    });

    return res.status(201).json(cartItem);
  }
}
