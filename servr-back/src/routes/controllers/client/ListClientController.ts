import { Request, Response } from "express";
import { IClientRepository } from "../../../interfaces/IClientRepository";
import { ListClientsService } from "../../../services/client/ListClientService";

export class ListClientsController {
  constructor(private clientRepo: IClientRepository) {}
  async handle(_: Request, res: Response): Promise<Response> {
    const listClientsService = new ListClientsService(this.clientRepo);
    const clients = await listClientsService.execute();

    return res.json(clients);
  }
}
