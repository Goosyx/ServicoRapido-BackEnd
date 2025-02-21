import {
  ICartItem,
  ICartItemUpdateRequest,
} from "../../interfaces/ICartItemInterface";
import { ICartItemRepository } from "../../interfaces/ICartItemRepository";
import { CartItem } from "../../entities/cartItem";

export class UpdateCartItemService {
  constructor(private cartItemRepo: ICartItemRepository) {}
  async execute({
    id,
    quantity,
    productColor,
    productSize,
  }: ICartItemUpdateRequest): Promise<ICartItem> {
    const result = await this.cartItemRepo.findCartItemById(id);

    const carItem = new CartItem(
      {
        quantity: quantity || result.quantity,
        cartId: result.cartId,
        productId: result.productId,
        productColor: productColor || result.productColor,
        productSize: productSize || result.productSize,
      },
      result.id
    );

    const res = await this.cartItemRepo.updateCartItem(carItem.toJson(), id);

    return res;
  }
}
