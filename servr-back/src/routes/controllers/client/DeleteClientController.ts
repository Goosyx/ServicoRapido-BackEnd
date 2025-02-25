import { Request, Response } from "express";
import { IClientRepository } from "../../../interfaces/IClientRepository";
import { DeleteClientService } from "../../../services/client/DeleteClientService";

export class DeleteClientController {
  constructor(private clientRepo: IClientRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteClientService = new DeleteClientService(this.clientRepo);
    await deleteClientService.execute({ id });

    return res.status(200).send();
  }
}
