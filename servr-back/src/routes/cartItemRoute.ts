import { Request, Response, Router } from "express";
import { resolveController } from "../adapters/resolveController";
import { ICartItemRepository } from "../interfaces/ICartItemRepository";
import { CartItemRepository } from "../repositories/CartItemRepository";
import { CreateCartItemController } from "./controllers/cartItem/CreateCartItemController";
import { DeleteCartItemController } from "./controllers/cartItem/DeleteCartItemController";
import { GetCartItemController } from "./controllers/cartItem/GetCartItemController";
import { UpdateCartItemController } from "./controllers/cartItem/UpdateCartItem";

export const cartItemRoute = Router();

const cartItemRepo: ICartItemRepository = new CartItemRepository();
const createCartItemController = new CreateCartItemController(cartItemRepo);
const deleteCartItemController = new DeleteCartItemController(cartItemRepo);
const getCartItemController = new GetCartItemController(cartItemRepo);
const updateCartItemController = new UpdateCartItemController(cartItemRepo);

//criação
cartItemRoute.post(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await createCartItemController.handle(req, res);
  })
);

cartItemRoute.get(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await getCartItemController.handle(req, res);
  })
);

cartItemRoute.delete(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await deleteCartItemController.handle(req, res);
  })
);

cartItemRoute.put(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await updateCartItemController.handle(req, res);
  })
);
