import { ICartItemGetRequest } from "../../interfaces/ICartItemInterface";
import { ICartItemRepository } from "../../interfaces/ICartItemRepository";

export class DeleteCartItemService {
  constructor(private cartItemRepo: ICartItemRepository) {}
  async execute({ id }: ICartItemGetRequest): Promise<void> {
    await this.cartItemRepo.findCartItemById(id);
    await this.cartItemRepo.deleteCartItem(id);
  }
}
