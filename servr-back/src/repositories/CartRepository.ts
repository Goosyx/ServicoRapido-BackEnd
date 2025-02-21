import { PrismaClient } from "@prisma/client";
import { ICartRepository } from "../interfaces/ICartRepository";
import { AppError } from "../errors/AppError";
import { ICartCreateRequest, ICart } from "../interfaces/ICartInterface";

const prisma = new PrismaClient();

export class CartRepository implements ICartRepository {
  async createCart(props: ICartCreateRequest): Promise<ICart> {
    const result = await prisma.cart.create({
      data: props,
      include: { cartItems: true },
    });

    if (!result) throw new AppError("Error creating cart");

    return {
      ...result,
      cartItems: result.cartItems.map((item) => {
        return {
          ...item,
          productColor: item.productColor || undefined,
          productSize: item.productSize || undefined,
        };
      }),
    };
  }

  async findCartByClientId(clientId: string): Promise<ICart | null> {
    const result = await prisma.cart.findUnique({
      where: { clientId },
      include: {
        cartItems: {
          include: {
            product: {
              include: {
                user: {
                  include: {
                    stores: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // if (!result) throw new AppError("Cart not found");
    if (!result) return null;

    return {
      ...result,
      cartItems: result?.cartItems.map((item) => {
        return {
          ...item,
          productColor: item.productColor || undefined,
          productSize: item.productSize || undefined,
        };
      }),
    };
  }

  async findCartById(id: string): Promise<ICart> {
    const result = await prisma.cart.findUnique({
      where: { id },
      include: { cartItems: true },
    });

    if (!result) throw new AppError("Cart not found");

    return {
      ...result,
      cartItems: result.cartItems.map((item) => {
        return {
          ...item,
          productColor: item.productColor || undefined,
          productSize: item.productSize || undefined,
        };
      }),
    };
  }

  async delete(id: string): Promise<void> {
    await prisma.cart.delete({
      where: { id },
    });
  }
}
