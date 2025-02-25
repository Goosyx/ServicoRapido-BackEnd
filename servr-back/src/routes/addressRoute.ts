import { Request, Response, Router } from "express";
import { IAddressRepository } from "../interfaces/IAddressRepository";
import { AddressRepository } from "../repositories/AddressRepository";
import { CreateAddressController } from "./controllers/address/CreateAddressController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { DeleteAddressController } from "./controllers/address/DeleteAddressController";
import { GetByUserAddressController } from "./controllers/address/GetAddressByUserController";
import { GetAddressController } from "./controllers/address/GetAddressController";
import { ListAddressController } from "./controllers/address/ListAddressController";
import { UpdateAddressController } from "./controllers/address/UpdateAddressController";
import { resolveController } from "../adapters/resolveController";

export const addressRoute = Router();

const addRepo: IAddressRepository = new AddressRepository();
const createAddressController = new CreateAddressController(addRepo);
const deleteAddressController = new DeleteAddressController(addRepo);
const getByUserAddressController = new GetByUserAddressController(addRepo);
const getAddressController = new GetAddressController(addRepo);
const listAddressController = new ListAddressController(addRepo);
const updateAddressController = new UpdateAddressController(addRepo);

addressRoute.post(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await createAddressController.handle(req, res);
  })
);

addressRoute.get(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await getAddressController.handle(req, res);
  })
);

addressRoute.get(
  "/",
  resolveController(async (_: Request, res: Response) => {
    return await listAddressController.handle(_, res);
  })
);

addressRoute.put(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await updateAddressController.handle(req, res);
  })
);

addressRoute.delete(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await deleteAddressController.handle(req, res);
  })
);

addressRoute.get(
  "/user/:userId",
  resolveController(async (req: Request, res: Response) => {
    return await getByUserAddressController.handle(req, res);
  })
);
