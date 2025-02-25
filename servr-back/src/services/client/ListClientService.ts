import { IClientRepository } from "../../interfaces/IClientRepository";
import { IClient } from "../../interfaces/IClientInterface";

export class ListClientsService {
  constructor(private clientRepo: IClientRepository) {}
  async execute(): Promise<IClient[]> {
    const result = await this.clientRepo.findAll();
    return result;
  }
}
