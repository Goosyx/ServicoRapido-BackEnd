import { Request, Response } from "express";
import { ICartRepository } from "../../../interfaces/ICartRepository";
import { CreateCartService } from "../../../services/cart/CreateCartService";

export class CreateCartController {
  constructor(private cartRepo: ICartRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { clientId, id } = req.body;

    const createCartService = new CreateCartService(this.cartRepo);

    const cart = await createCartService.execute({
      clientId,
      id,
    });

    return res.status(201).json(cart);
  }
}
