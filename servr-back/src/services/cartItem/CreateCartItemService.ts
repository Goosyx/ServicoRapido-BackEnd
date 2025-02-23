import { ICartItemRepository } from "../../interfaces/ICartItemRepository";
import {
  ICartItem,
  ICartItemCreateRequest,
} from "../../interfaces/ICartItemInterface";
import { CartItem } from "../../entities/cartItem";

export class CreateCartItemService {
  constructor(private cartItemRepo: ICartItemRepository) {}
  async execute({
    cartId,
    productId,
    quantity,
    productColor,
    productSize,
  }: ICartItemCreateRequest): Promise<ICartItem> {
    const cartItem = new CartItem({
      cartId,
      productId,
      quantity,
      productColor,
      productSize,
    });

    const result = await this.cartItemRepo.createCartItem(cartItem);

    return result;
  }
}
