import { ICartGetRequest, ICart } from "../../interfaces/ICartInterface";
import { ICartRepository } from "../../interfaces/ICartRepository";

export class GetCartService {
  constructor(private cartRepo: ICartRepository) {}
  async execute({ id }: ICartGetRequest): Promise<ICart> {
    const result = await this.cartRepo.findCartById(id);
    return result;
  }
}
