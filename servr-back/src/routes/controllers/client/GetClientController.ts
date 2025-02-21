import { Request, Response } from "express";
import { IClientRepository } from "../../../interfaces/IClientRepository";
import { GetClientService } from "../../../services/client/GetClientService";

export class GetClientController {
  constructor(private clientRepo: IClientRepository) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getClientService = new GetClientService(this.clientRepo);
    const result = await getClientService.execute({ id });
    return res.json(result);
  }
}
