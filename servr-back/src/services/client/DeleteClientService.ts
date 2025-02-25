import { IClientRepository } from "../../interfaces/IClientRepository";
import { IClientDeleteRequest } from "../../interfaces/IClientInterface";
import { AppError } from "../../errors/AppError";

export class DeleteClientService {
  constructor(private clientRepo: IClientRepository) {}
  async execute({ id }: IClientDeleteRequest): Promise<void> {
    const client = await this.clientRepo.findOneClient(id);

    if (!client) {
      throw new AppError("Client not found");
    }

    await this.clientRepo.delete(id);
  }
}
