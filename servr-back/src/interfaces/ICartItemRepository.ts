import {
  ICartItem,
  ICartItemCreateRequest,
  ICartItemUpdateRequest,
} from "./ICartItemInterface";

export interface ICartItemRepository {
  createCartItem(props: ICartItemCreateRequest): Promise<ICartItem>;
  deleteCartItem(id: string): Promise<void>;
  findCartItemById(id: string): Promise<ICartItem>;
  updateCartItem(props: ICartItemUpdateRequest, id: string): Promise<ICartItem>;
}
