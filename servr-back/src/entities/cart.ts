import { ICart } from "../interfaces/ICartInterface";
import { createUUID } from "../utils/createUUID";

export class Cart {
  id: ICart["id"];

  clientId: ICart["clientId"];
  client?: ICart["client"];

  cartItems?: ICart["cartItems"];

  createdAt: ICart["createdAt"];
  updatedAt: ICart["updatedAt"];

  constructor(props: Omit<ICart, "id">, id?: string) {
    this.id = id || createUUID();
    this.clientId = props.clientId;
    this.client = props.client;
    this.cartItems = props.cartItems;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = new Date();
  }

  toJson(): ICart {
    return {
      id: this.id,
      clientId: this.clientId,
      client: this.client,
      cartItems: this.cartItems,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
