import { IClientRepository } from "../../interfaces/IClientRepository";
import {
  IClient,
  IClientUpdateRequest,
} from "../../interfaces/IClientInterface";
import { AppError } from "../../errors/AppError";
import { validateEmail } from "../../utils/validade";
import { Client } from "../../entities/client";

export class UpdateClientService {
  constructor(private clientRepo: IClientRepository) {}
  async execute({ id, name, email }: IClientUpdateRequest): Promise<IClient> {
    const result = await this.clientRepo.findOneClient(id);

    if (email && !validateEmail(email)) {
      throw new AppError("Email inválido");
    }

    const client = new Client(
      {
        name: name || result.name,
        email: email || result.email,
        password: result.password,
      },
      result.id
    );

    const result2 = await this.clientRepo.update(client.toJSON(), id);

    return result2;
  }
}
