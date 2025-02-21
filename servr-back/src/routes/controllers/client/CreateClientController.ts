import { Request, Response } from "express";
import { IClientRepository } from "../../../interfaces/IClientRepository";
import { IHashRepository } from "../../../interfaces/IHashRepository";
import { CreateClientService } from "../../../services/client/CreateClientService";

export class CreateClientController {
  constructor(
    private clientRepo: IClientRepository,
    private hashRepo: IHashRepository
  ) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, confirmEmail, confirmPassword } = req.body;

    const createClientService = new CreateClientService(
      this.clientRepo,
      this.hashRepo
    );

    const client = await createClientService.execute({
      name,
      email,
      password,
      confirmEmail,
      confirmPassword,
    });

    return res.status(201).json(client);
  }
}
