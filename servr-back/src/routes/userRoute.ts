import { Request, Response, Router } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { GetUserController } from "./controllers/user/GetUserController";
import { ListUsersController } from "./controllers/user/ListUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { IUserRepository } from "../interfaces/IUserRepository";
import { resolveController } from "../adapters/resolveController";
import { IHashRepository } from "../interfaces/IHashRepository";
import { HashRepository } from "../repositories/HashRepository";
import { IStoreRepository } from "../interfaces/IStoreRepository";
import { StoreRepository } from "../repositories/StoreRepository";

export const userRoute = Router();

const userRepo: IUserRepository = new UserRepository();
const hashRepo: IHashRepository = new HashRepository();
const storeRepo: IStoreRepository = new StoreRepository();
const createUserController = new CreateUserController(
  userRepo,
  hashRepo,
  storeRepo
);
const getUserController = new GetUserController(userRepo);
const listUsersController = new ListUsersController(userRepo);
const updateUserController = new UpdateUserController(userRepo, hashRepo);
const deleteUserController = new DeleteUserController(userRepo);

//criação
userRoute.post(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await createUserController.handle(req, res);
  })
);

userRoute.get(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await getUserController.handle(req, res);
  })
);

userRoute.get(
  "/",
  resolveController(async (_: Request, res: Response) => {
    return await listUsersController.handle(_, res);
  })
);

userRoute.put(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await updateUserController.handle(req, res);
  })
);

userRoute.delete(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await deleteUserController.handle(req, res);
  })
);
