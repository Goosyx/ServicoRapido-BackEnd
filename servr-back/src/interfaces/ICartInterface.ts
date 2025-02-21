import { ICartItem } from "./ICartItemInterface";
import { IClient } from "./IClientInterface";

export interface ICart {
  id: string;

  clientId: string;
  client?: IClient;

  cartItems?: ICartItem[];

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICartCreateRequest {
  id: string;
  clientId: string;
}

export interface ICartGetByClientIdRequest {
  clientId: string;
}

export interface ICartGetRequest {
  id: string;
}

export interface ICartDeleteRequest {
  id: string;
}
