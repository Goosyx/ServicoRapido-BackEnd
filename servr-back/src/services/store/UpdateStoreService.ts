import { IStore, IUpdateStoreRequest } from "../../interfaces/IStoreInterface";
import { IStoreRepository } from "../../interfaces/IStoreRepository";

export class UpdateStoreService {
  constructor(
    private storeRepo: IStoreRepository,
  ){}
  async execute({id, name}: IUpdateStoreRequest): Promise<IStore>{
    const result = await this.storeRepo.findByUser(id)
    if (result.length > 0) {
      try {
        const r = await this.storeRepo.update({
          ...result[0],
          name
        })

        return r;
      } catch (err) {
        throw new Error(`Could not update store`)
      }
    }
    
    throw new Error(`Could not update store`)
  }
}