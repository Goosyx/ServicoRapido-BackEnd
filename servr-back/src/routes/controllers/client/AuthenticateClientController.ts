import { Request, Response } from "express";
import { IClientRepository } from "../../../interfaces/IClientRepository";
import { IJWTRepository } from "../../../interfaces/IJWTRepository";
import { IHashRepository } from "../../../interfaces/IHashRepository";
import { IAddressRepository } from "../../../interfaces/IAddressRepository";
import { AuthenticateClientService } from "../../../services/client/AuthenticateClientService";

export class AuthenticateClientController {
  constructor(
    private clientRepo: IClientRepository,
    private jwtRepo: IJWTRepository,
    private hashRepo: IHashRepository
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateClientService = new AuthenticateClientService(
      this.clientRepo,
      this.jwtRepo,
      this.hashRepo
    );
    const result = await authenticateClientService.execute({ email, password });

    return res.status(201).json(result).send();
  }
}
