import { Request, Response } from "express";
import { IStoreRepository } from "../../../interfaces/IStoreRepository";
import { UpdateStoreService } from "../../../services/store/UpdateStoreService";

export class UpdateStoreController{
  constructor(
    private storeRepo: IStoreRepository
  ){}

  async handle(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const { name } = req.body;

    const updateStoreService = new UpdateStoreService(this.storeRepo)

    const result = await updateStoreService.execute({ id, name })

    return res.json(result)
  }
}