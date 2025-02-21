import { Request, Response, Router } from "express";
import { resolveController } from "../adapters/resolveController";
import { ICartRepository } from "../interfaces/ICartRepository";
import { CartRepository } from "../repositories/CartRepository";
import { CreateCartController } from "./controllers/cart/CreateCartController";
import { DeleteCartController } from "./controllers/cart/DeleteCartController";
import { GetCartByClientIdController } from "./controllers/cart/GetCartByClientId";
import { GetCartController } from "./controllers/cart/GetCartController";

export const cartRoute = Router();

const cartRepo: ICartRepository = new CartRepository();
const createCartController = new CreateCartController(cartRepo);
const deleteCartController = new DeleteCartController(cartRepo);
const getCartByClientIdController = new GetCartByClientIdController(cartRepo);
const getCartController = new GetCartController(cartRepo);

//criação
cartRoute.post(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await createCartController.handle(req, res);
  })
);

cartRoute.get(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await getCartController.handle(req, res);
  })
);

cartRoute.delete(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await deleteCartController.handle(req, res);
  })
);

cartRoute.get(
  "/client/:clientId",
  resolveController(async (req: Request, res: Response) => {
    return await getCartByClientIdController.handle(req, res);
  })
);
