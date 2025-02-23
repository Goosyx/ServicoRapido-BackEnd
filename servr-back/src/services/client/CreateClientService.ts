import {
  IClient,
  IClientCreateRequest,
} from "../../interfaces/IClientInterface";
import { AppError } from "../../errors/AppError";
import {
  validateEmail,
  validatePassword,
  validateConfirmEmail,
  validateConfirmPassword,
} from "../../utils/validade";
import { IHashRepository } from "../../interfaces/IHashRepository";
import { IClientRepository } from "../../interfaces/IClientRepository";
import { Client } from "../../entities/client";

export class CreateClientService {
  constructor(
    private clientRepo: IClientRepository,
    private hashRepo: IHashRepository
  ) {}
  async execute({
    name,
    email,
    password,
    confirmEmail,
    confirmPassword,
  }: IClientCreateRequest): Promise<IClient> {
    if (!validateEmail(email)) {
      throw new AppError("Email inválido");
    }

    if (!validatePassword(password)) {
      throw new AppError("A senha não atende os requisitos");
    }

    if (confirmEmail && !validateConfirmEmail(confirmEmail, email)) {
      throw new AppError("Email ou senha não são iguais");
    }

    if (
      confirmPassword &&
      !validateConfirmPassword(confirmPassword, password)
    ) {
      throw new AppError("Email ou senha não são iguais");
    }

    password = await this.hashRepo.cryptographie(password);

    const client = new Client({
      name,
      email,
      password,
    });

    let clientdata = client.toJSON();

    await this.clientRepo.insert(clientdata);

    return { ...clientdata };
  }
}
