import { Request, Response } from "express";
import { ICartItemRepository } from "../../../interfaces/ICartItemRepository";
import { ICartItemUpdateRequest } from "../../../interfaces/ICartItemInterface";
import { UpdateCartItemService } from "../../../services/cartItem/UpdateCartItemService";

export class UpdateCartItemController {
  constructor(private cartItemRepo: ICartItemRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { quantity, productColor, productSize }: ICartItemUpdateRequest =
      req.body;

    const updateCartItemService = new UpdateCartItemService(this.cartItemRepo);

    await updateCartItemService.execute({
      id,
      quantity,
      productColor,
      productSize,
    });

    return res.status(201).json();
  }
}
