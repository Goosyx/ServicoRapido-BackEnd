import { Request, Response } from "express";
import { ICartItemRepository } from "../../../interfaces/ICartItemRepository";
import { DeleteCartItemService } from "../../../services/cartItem/DeleteCartItemService";

export class DeleteCartItemController {
  constructor(private cartItemRepo: ICartItemRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCartItemService = new DeleteCartItemService(this.cartItemRepo);
    await deleteCartItemService.execute({ id });

    return res.status(200).send();
  }
}
