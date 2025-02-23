import { ICartRepository } from "../../interfaces/ICartRepository";
import { ICart, ICartCreateRequest } from "../../interfaces/ICartInterface";
import { Cart } from "../../entities/cart";

export class CreateCartService {
  constructor(private cartRepo: ICartRepository) {}
  async execute({ clientId }: ICartCreateRequest): Promise<ICart> {
    const cart = new Cart({
      clientId,
    });

    const result = await this.cartRepo.createCart(cart);

    return result;
  }
}
