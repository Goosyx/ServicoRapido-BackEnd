import { IProduct } from "./IProductInterface";

export interface ICartItem {
  id: string;
  quantity: number;

  cartId: string;

  productId: string;
  product?: IProduct;

  productColor?: string;
  productSize?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICartItemCreateRequest {
  id: string;
  quantity: number;
  productColor?: string;
  productSize?: string;

  cartId: string;

  productId: string;
}

export interface ICartItemGetRequest {
  id: string;
}

export interface ICartItemUpdateRequest {
  id: string;
  quantity: number;
  productColor?: string;
  productSize?: string;
}

export interface ICartItemDeleteRequest {
  id: string;
}
