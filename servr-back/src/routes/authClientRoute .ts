import { Router, Request, Response } from "express";
import { IClientRepository } from "../interfaces/IClientRepository";
import { IJWTRepository } from "../interfaces/IJWTRepository";
import { JWTRepository } from "../repositories/JWTRepository";
import { IHashRepository } from "../interfaces/IHashRepository";
import { HashRepository } from "../repositories/HashRepository";
import { resolveController } from "../adapters/resolveController";
import { ClientRepository } from "../repositories/ClientRepository";
import { AuthenticateClientController } from "./controllers/client/AuthenticateClientController";

export const clientAuthenticateRoute = Router();

const clientRepo: IClientRepository = new ClientRepository();
const jwtRepo: IJWTRepository = new JWTRepository();
const hashRepo: IHashRepository = new HashRepository();

const authenticateClientController = new AuthenticateClientController(
  clientRepo,
  jwtRepo,
  hashRepo
);

clientAuthenticateRoute.post(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await authenticateClientController.handle(req, res);
  })
);
