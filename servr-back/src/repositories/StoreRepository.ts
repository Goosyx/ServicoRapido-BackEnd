import { PrismaClient } from "@prisma/client";
import { IStoreRepository } from "../interfaces/IStoreRepository";
import { IStore } from "../interfaces/IStoreInterface";
import { checkIfValidUUID } from "../utils/validade";

const prisma = new PrismaClient();

export class StoreRepository implements IStoreRepository {
  async findByUser(id: string): Promise<IStore[]> {
    const find = await prisma.stores.findMany({ where: { userId: id } })
    return find;
  }

  async insert(props: IStore): Promise<IStore> {
    const store = await prisma.stores.create({
      data: props
    })
    return store;
  }

  async update(props: IStore): Promise<IStore> {
    const store = await prisma.stores.update({
      where: {
        id: props.id
      },
      data: props
    })

    return store;
  }

  async delete(id: string): Promise<void> {
    await prisma.stores.delete({ where: { id } })
  }

  async findAll(): Promise<IStore[]> {
    const result = await prisma.stores.findMany({ include: { user: true } });
    return result;
  }

  async findOneStore(id: string): Promise<IStore | null> {
    if(checkIfValidUUID(id) === false){
      return null;
    }
    try {
      const result = await prisma.stores.findUnique({ where: { id } });
      return result;
    } catch (e) {
      return null;
    }
  }
}
