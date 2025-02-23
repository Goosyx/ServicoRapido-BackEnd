import { Request, Response } from "express";
import { IClientRepository } from "../../../interfaces/IClientRepository";
import { IClient } from "../../../interfaces/IClientInterface";
import { UpdateClientService } from "../../../services/client/UpdateClientService";

export class UpdateClientController {
  constructor(private clientRepo: IClientRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, password, confirmEmail, confirmPassword }: IClient =
      req.body;

    const updateClientService = new UpdateClientService(this.clientRepo);

    await updateClientService.execute({
      id,
      name,
      email,
      password,
      confirmEmail,
      confirmPassword,
    });

    return res.status(201).json();
  }
}
