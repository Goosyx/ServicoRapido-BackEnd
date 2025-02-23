import { Request, Response, Router } from "express";
import { IStoreRepository } from "../interfaces/IStoreRepository";
import { StoreRepository } from "../repositories/StoreRepository";
import { GetStoreController } from "./controllers/store/GetStoreController";
import { ListStoreController } from "./controllers/store/ListStoreController";
import { UpdateStoreController } from "./controllers/store/UpdateStoreController";
import { resolveController } from "../adapters/resolveController";
import { IUserRepository } from "../interfaces/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";
import { IProductRepository } from "../interfaces/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";
import { IImagesRepository } from "../interfaces/IImagesRepository";
import { ImagesRepository } from "../repositories/ImagesRepository";

export const storeRoute = Router();

const strRepo: IStoreRepository = new StoreRepository();
const userRepo: IUserRepository = new UserRepository();
const productRepo: IProductRepository = new ProductRepository();
const imgRepo: IImagesRepository = new ImagesRepository();
const getStoreController = new GetStoreController(strRepo, userRepo);
const listStoreController = new ListStoreController(strRepo, productRepo, imgRepo);
const updateStoreController = new UpdateStoreController(strRepo);


storeRoute.get(
  "/user/:id",
  resolveController(async (req: Request, res: Response) => {
    return await getStoreController.handle(req, res);
  })
);

storeRoute.get(
  "/",
  resolveController(async (_: Request, res: Response) => {
    return await listStoreController.handle(_, res);
  })
);

storeRoute.put(
  "/user/:id",
  resolveController(async (req: Request, res: Response) => {
    return await updateStoreController.handle(req, res);
  })
);