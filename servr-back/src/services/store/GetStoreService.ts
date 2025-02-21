import { IGetStoreRequest, IStore } from "../../interfaces/IStoreInterface";
import { IStoreRepository } from "../../interfaces/IStoreRepository";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { createUUID } from "../../utils/createUUID";

export class GetStoreService {
  constructor(
    private storeRepo: IStoreRepository,
    private userRepo: IUserRepository,
  ){}
  async execute({id}: IGetStoreRequest): Promise<IStore>{
    const result = await this.storeRepo.findByUser(id)
    if (result.length > 0) return result[0];

    const findUser = await this.userRepo.findOneUser(id);
    if(findUser) {
      const store = await this.storeRepo.insert({
        id: createUUID(),
        name: findUser.name,
        userId: id
      })

      return store;
    }
    
    throw new Error(`Could not create store`)
  }
}