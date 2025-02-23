import { ICartItem } from "../interfaces/ICartItemInterface";
import { createUUID } from "../utils/createUUID";

export class CartItem {
  id: ICartItem["id"];
  quantity: ICartItem["quantity"];

  cartId: ICartItem["cartId"];

  productId: ICartItem["id"];
  product?: ICartItem["product"];

  productColor?: ICartItem["productColor"];
  productSize?: ICartItem["productSize"];

  createdAt: ICartItem["createdAt"];
  updatedAt: ICartItem["updatedAt"];

  constructor(props: Omit<ICartItem, "id">, id?: string) {
    this.id = id || createUUID();
    this.quantity = props.quantity;
    this.cartId = props.cartId;
    this.productId = props.productId;
    this.product = props.product;
    this.productColor = props.productColor;
    this.productSize = props.productSize;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = new Date();
  }

  toJson(): ICartItem {
    return {
      id: this.id,
      quantity: this.quantity,
      cartId: this.cartId,
      productId: this.productId,
      product: this.product,
      productColor: this.productColor,
      productSize: this.productSize,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
