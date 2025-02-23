import { IUser } from "./IUserInterface";

export interface IStore {
  id: string;
  userId: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IListStore {
  id: string;
  userId: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  image?: string;

  user?: IUser;
}

export interface IGetStoreRequest {
  id: string;
}

export interface IUpdateStoreRequest {
  id: string;
  name: string;
}
