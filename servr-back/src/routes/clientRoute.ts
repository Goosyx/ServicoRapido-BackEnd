import { Request, Response, Router } from "express";
import { IClientRepository } from "../interfaces/IClientRepository";
import { resolveController } from "../adapters/resolveController";
import { IHashRepository } from "../interfaces/IHashRepository";
import { HashRepository } from "../repositories/HashRepository";
import { ClientRepository } from "../repositories/ClientRepository";
import { CreateClientController } from "./controllers/client/CreateClientController";
import { GetClientController } from "./controllers/client/GetClientController";
import { UpdateClientController } from "./controllers/client/UpdateClientController";
import { DeleteClientController } from "./controllers/client/DeleteClientController";
import { ListClientsController } from "./controllers/client/ListClientController";

export const clientRoute = Router();

const clientRepo: IClientRepository = new ClientRepository();
const hashRepo: IHashRepository = new HashRepository();
const createClientController = new CreateClientController(clientRepo, hashRepo);
const getClientController = new GetClientController(clientRepo);
const listClientsController = new ListClientsController(clientRepo);
const updateClientController = new UpdateClientController(clientRepo);
const deleteClientController = new DeleteClientController(clientRepo);

//criação
clientRoute.post(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await createClientController.handle(req, res);
  })
);

clientRoute.get(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await getClientController.handle(req, res);
  })
);

clientRoute.get(
  "/",
  resolveController(async (_: Request, res: Response) => {
    return await listClientsController.handle(_, res);
  })
);

clientRoute.put(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await updateClientController.handle(req, res);
  })
);

clientRoute.delete(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await deleteClientController.handle(req, res);
  })
);
