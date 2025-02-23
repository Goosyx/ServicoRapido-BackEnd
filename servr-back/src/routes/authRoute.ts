import { Router, Request, Response } from "express";
import { AuthenticateUserController } from "./controllers/user/AuthenticateUserController";
import { IUserRepository } from "../interfaces/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";
import { IJWTRepository } from "../interfaces/IJWTRepository";
import { JWTRepository } from "../repositories/JWTRepository";
import { IHashRepository } from "../interfaces/IHashRepository";
import { HashRepository } from "../repositories/HashRepository";
import { ICryptoRepository } from "../interfaces/ICryptoRepository";
import { CryptoRepository } from "../repositories/CryptoRepository";
import { resolveController } from "../adapters/resolveController";
import { AddressRepository } from "../repositories/AddressRepository";
import { IAddressRepository } from "../interfaces/IAddressRepository";

export const userAuthenticateRoute = Router();

const cryptoRepo: ICryptoRepository = new CryptoRepository()
const userRepo: IUserRepository = new UserRepository();
const jwtRepo: IJWTRepository = new JWTRepository();
const hashRepo: IHashRepository = new HashRepository();
const addressRepo: IAddressRepository = new AddressRepository();

const authenticateUserController = new AuthenticateUserController(userRepo, jwtRepo, hashRepo, addressRepo);

userAuthenticateRoute.post("/", resolveController(async (req: Request, res: Response) => {
    return await authenticateUserController.handle(req, res);
}))