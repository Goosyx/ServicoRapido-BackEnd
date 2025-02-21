import { Request, Response } from "express";
import { ICartRepository } from "../../../interfaces/ICartRepository";
import { GetCartByClientIdService } from "../../../services/cart/GetCartByClientIdService";

export class GetCartByClientIdController {
  constructor(private cartRepo: ICartRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { clientId } = req.params;

    const getCartByClientIdService = new GetCartByClientIdService(
      this.cartRepo
    );
    const result = await getCartByClientIdService.execute({ clientId });
    return res.json(result);
  }
}
