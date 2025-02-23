import { Request, Response } from "express";
import { IStoreRepository } from "../../../interfaces/IStoreRepository";
import { GetStoreService } from "../../../services/store/GetStoreService";
import { IUserRepository } from "../../../interfaces/IUserRepository";

export class GetStoreController{
  constructor(
    private storeRepo: IStoreRepository,
    private userRepo: IUserRepository
  ){}

  async handle(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;

    const getStoreService = new GetStoreService(this.storeRepo, this.userRepo)

    const result = await getStoreService.execute({ id })

    return res.json(result)
  }
}