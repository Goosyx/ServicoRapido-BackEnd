import { ICart, ICartCreateRequest } from "./ICartInterface";

export interface ICartRepository {
  findCartByClientId(clientId: string): Promise<ICart | null>;
  createCart(props: ICartCreateRequest): Promise<ICart>;
  delete(id: string): Promise<void>;
  findCartById(id: string): Promise<ICart>;
}
