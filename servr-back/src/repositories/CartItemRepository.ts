import { PrismaClient } from "@prisma/client";
import { ICartItemRepository } from "../interfaces/ICartItemRepository";
import { AppError } from "../errors/AppError";
import {
  ICartItemCreateRequest,
  ICartItem,
  ICartItemUpdateRequest,
} from "../interfaces/ICartItemInterface";

const prisma = new PrismaClient();

export class CartItemRepository implements ICartItemRepository {
  async createCartItem(props: ICartItemCreateRequest): Promise<ICartItem> {
    const result = await prisma.cartItem.create({
      data: props,
      include: { product: true },
    });

    if (!result) throw new AppError("Error creating cart item");

    return {
      ...result,
      productColor: result.productColor || undefined,
      productSize: result.productSize || undefined,
    };
  }

  async findCartItemById(id: string): Promise<ICartItem> {
    const result = await prisma.cartItem.findUnique({
      include: { product: true },
      where: { id },
    });

    if (!result) throw new AppError("Cart item not found");

    return {
      ...result,
      productColor: result.productColor || undefined,
      productSize: result.productSize || undefined,
    };
  }

  async updateCartItem(
    props: ICartItemUpdateRequest,
    id: string
  ): Promise<ICartItem> {
    const result = await prisma.cartItem.update({
      include: { product: true },
      where: { id },
      data: props,
    });

    if (!result) throw new AppError("Error updating cart item");

    return {
      ...result,
      productColor: result.productColor || undefined,
      productSize: result.productSize || undefined,
    };
  }

  async deleteCartItem(id: string): Promise<void> {
    await prisma.cartItem.delete({
      where: { id },
    });
  }
}
