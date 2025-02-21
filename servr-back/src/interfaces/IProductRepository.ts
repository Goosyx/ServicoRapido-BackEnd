import {
  IProduct,
  IProductCreateRequest,
  IProductUpdateRequest,
} from "./IProductInterface";

export interface IProductRepository {
  findAll(): Promise<IProduct[]>;
  findOneProduct(id: string): Promise<IProduct>;
  findAllProductsByUserId(userId: string): Promise<IProduct[]>;
  insert(props: IProductCreateRequest): Promise<IProduct>;
  update(props: IProductUpdateRequest, id: string): Promise<IProduct>;
  delete(id: string): Promise<void>;
}
