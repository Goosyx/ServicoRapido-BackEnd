import { PrismaClient } from "@prisma/client";
import { IProductRepository } from "../interfaces/IProductRepository";
import {
  IProduct,
  IProductCreateRequest,
  IProductUpdateRequest,
} from "../interfaces/IProductInterface";

const prisma = new PrismaClient();

export class ProductRepository implements IProductRepository {
  async findAll(): Promise<IProduct[]> {
    const result = await prisma.product.findMany({
      include: {
        user: {
          include: {
            stores: true,
          },
        },
      },
    });
    return result;
  }

  async findOneProduct(id: string): Promise<IProduct> {
    const result = await prisma.product.findUnique({
      where: { id },
      include: {
        user: {
          include: {
            stores: true,
          },
        },
      },
    });

    if (!result) throw new Error("Product not found");
    return result;
  }

  async insert(props: IProduct): Promise<IProduct> {
    const result = await prisma.product.create({
      data: props,
    });

    return result;
  }

  async update(props: IProductUpdateRequest, id: string): Promise<IProduct> {
    const result = await prisma.product.update({
      where: { id },
      data: props,
    });

    return result;
  }

  async delete(id: string): Promise<void> {
    await prisma.product.delete({
      where: { id },
    });
  }

  async findAllProductsByUserId(userId: string): Promise<IProduct[]> {
    const result = await prisma.product.findMany({
      where: { userId },
    });

    return result;
  }
}
