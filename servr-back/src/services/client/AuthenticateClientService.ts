import { AppError } from "../../errors/AppError";
import { IClientAuthenticateRequest } from "../../interfaces/IClientInterface";
import { IClientRepository } from "../../interfaces/IClientRepository";
import { IHashRepository } from "../../interfaces/IHashRepository";
import { IJWTRepository } from "../../interfaces/IJWTRepository";

export class AuthenticateClientService {
  constructor(
    private clientRepo: IClientRepository,
    private jwtRepo: IJWTRepository,
    private hashRepo: IHashRepository
  ) {}

  async execute({
    email,
    password,
  }: IClientAuthenticateRequest): Promise<Object | void> {
    const client = await this.clientRepo.findByEmail(email);

    if (client) {
      const res = await this.hashRepo.uncryptographie(
        password,
        client.password
      );

      if (res) {
        const token = this.jwtRepo.generate({
          email: client.email!,
          id: client.id,
        });
        return { client, token };
      } else throw new AppError("incorrect email or password");
    } else throw new AppError("client doesn't exists");
  }
}
