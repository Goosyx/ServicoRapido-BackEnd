import { IClientRepository } from "../../interfaces/IClientRepository";
import { IClient, IClientGetRequest } from "../../interfaces/IClientInterface";

export class GetClientService {
  constructor(private clientRepo: IClientRepository) {}
  async execute({ id }: IClientGetRequest): Promise<IClient> {
    const result = await this.clientRepo.findOneClient(id);
    return result;
  }
}
