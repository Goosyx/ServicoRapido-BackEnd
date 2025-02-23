import { PrismaClient } from "@prisma/client";
import { IClientRepository } from "../interfaces/IClientRepository";
import { IClient } from "../interfaces/IClientInterface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class ClientRepository implements IClientRepository {
  async findByEmail(email: string): Promise<IClient> {
    let result = await prisma.client.findUnique({
      where: { email },
    });

    if (!result) {
      throw new AppError("Client not found");
    }

    return result;
  }
  async findAll(): Promise<IClient[]> {
    const result = await prisma.client.findMany();
    return result.map((r) => {
      return r;
    });
  }

  async insert(props: IClient): Promise<IClient> {
    const result = await prisma.client.create({
      data: props,
    });

    return result;
  }

  async findOneClient(id: string): Promise<IClient> {
    const result = await prisma.client.findUnique({
      where: { id },
    });

    if (!result) throw Error("Client not fund");

    return result;
  }

  async update(props: IClient, id: string): Promise<IClient> {
    const result = await prisma.client.update({
      where: { id },
      data: props,
    });

    return result;
  }

  async delete(id: string): Promise<void> {
    await prisma.client.delete({
      where: { id },
    });
  }
}
