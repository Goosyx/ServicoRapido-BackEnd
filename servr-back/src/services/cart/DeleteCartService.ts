import { ICartGetRequest } from "../../interfaces/ICartInterface";
import { ICartRepository } from "../../interfaces/ICartRepository";

export class DeleteCartService {
  constructor(private cartRepo: ICartRepository) {}
  async execute({ id }: ICartGetRequest): Promise<void> {
    await this.cartRepo.findCartById(id);
    await this.cartRepo.delete(id);
  }
}
