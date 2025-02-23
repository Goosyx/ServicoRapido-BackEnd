import { Request, Response } from "express";
import { IStoreRepository } from "../../../interfaces/IStoreRepository";
import { ListStoreService } from "../../../services/store/ListStoreService";
import { IProductRepository } from "../../../interfaces/IProductRepository";
import { IImagesRepository } from "../../../interfaces/IImagesRepository";

export class ListStoreController{
  constructor(
    private storeRepo: IStoreRepository,
    private productRepo: IProductRepository,
    private imageRepo: IImagesRepository
  ){}

  async handle(req: Request, res: Response): Promise<Response>{
    const listStoreService = new ListStoreService(this.storeRepo, this.productRepo, this.imageRepo)

    const result = await listStoreService.execute()

    return res.json(result)
  }
}