import { Cart } from "../../entities/cart";
import {
  ICart,
  ICartGetByClientIdRequest,
} from "../../interfaces/ICartInterface";
import { ICartRepository } from "../../interfaces/ICartRepository";

export class GetCartByClientIdService {
  constructor(private cartRepo: ICartRepository) {}
  async execute({ clientId }: ICartGetByClientIdRequest): Promise<ICart> {
    const result = await this.cartRepo.findCartByClientId(clientId);

    //if dont exist cart with this clientId, create a new cart
    if (result === null) {
      const cart = new Cart({
        clientId,
      });

      return await this.cartRepo.createCart(cart);
    }

    return result;
  }
}
