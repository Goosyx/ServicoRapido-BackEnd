import { Request, Response } from "express";
import { ICartRepository } from "../../../interfaces/ICartRepository";
import { DeleteCartService } from "../../../services/cart/DeleteCartService";

export class DeleteCartController {
  constructor(private cartRepo: ICartRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCartService = new DeleteCartService(this.cartRepo);
    await deleteCartService.execute({ id });

    return res.status(200).send();
  }
}
