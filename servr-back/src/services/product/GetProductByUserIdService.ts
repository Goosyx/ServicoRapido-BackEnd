import { IProduct } from "../../interfaces/IProductInterface";
import { IProductRepository } from "../../interfaces/IProductRepository";

export class GetProductByUserIdService {
  constructor(private productRepo: IProductRepository) {}
  async execute(userId: string): Promise<IProduct[]> {
    const result = await this.productRepo.findAllProductsByUserId(userId);
    return result;
  }
}
