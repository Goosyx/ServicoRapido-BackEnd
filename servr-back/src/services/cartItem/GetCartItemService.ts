import {
  ICartItemGetRequest,
  ICartItem,
} from "../../interfaces/ICartItemInterface";
import { ICartItemRepository } from "../../interfaces/ICartItemRepository";

export class GetCartItemService {
  constructor(private cartItemRepo: ICartItemRepository) {}
  async execute({ id }: ICartItemGetRequest): Promise<ICartItem> {
    const result = await this.cartItemRepo.findCartItemById(id);
    return result;
  }
}
