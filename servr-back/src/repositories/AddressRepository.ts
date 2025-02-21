import { PrismaClient } from "@prisma/client";
import { IAddressRepository } from "../interfaces/IAddressRepository";
import { IAddress } from "../interfaces/IAddressInterface";

const prisma = new PrismaClient();

export class AddressRepository implements IAddressRepository {
  async findAll(): Promise<IAddress[]> {
    const result = await prisma.address.findMany();
    return result.map(address => {
      return {
        ...address,
        number: address.number || undefined,
        complement: address.complement || undefined
      }
    });
  }

  async findAddress(id: string): Promise<IAddress> {
    const result = await prisma.address.findUnique({
      where: { id },
    });

    if (!result) throw Error("User not fund");
    return {
      ...result,
      number: result.number || undefined,
      complement: result.complement || undefined
    }
  }

  async findAddressByUser(userId: string): Promise<IAddress[]> {
    const result = await prisma.address.findMany({
      where: { userId },
    });

    return result.map(address => {
      return {
        ...address,
        number: address.number || undefined,
        complement: address.complement || undefined
      }
    });
  }

  async insert(props: IAddress): Promise<IAddress> {
    const result = await prisma.address.create({
      data: props,
    });

    return {
      ...result,
      number: result.number || undefined,
      complement: result.complement || undefined
    }
  }

  async update(props: IAddress, id: string): Promise<IAddress> {
    const result = await prisma.address.update({
      where: { id },
      data: {
        userId: props.userId,
        street: props.street,
        number: props.number,
        complement: props.complement,
        city: props.city,
        state: props.state,
        zipCode: props.zipCode,
      },
    });

    return {
      ...result,
      number: result.number || undefined,
      complement: result.complement || undefined
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.address.delete({
      where: { id },
    });
  }
}
