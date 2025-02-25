import { Request, Response, Router } from "express";
import { resolveController } from "../adapters/resolveController";
import { SendPaymentNotificationController } from "./controllers/payment/SendPaymentNotificationController";
import { NotificationProvider } from "../providers/notificationProvider";
import { StoreRepository } from "../repositories/StoreRepository";
import { UserRepository } from "../repositories/UserRepository";
import { IStoreRepository } from "../interfaces/IStoreRepository";
import { IUserRepository } from "../interfaces/IUserRepository";

export const paymentRoute = Router();

const notificationProvider = new NotificationProvider();
const storeRepo: IStoreRepository = new StoreRepository();
const userRepo: IUserRepository = new UserRepository();
const sendPaymentNotificationController = new SendPaymentNotificationController(
  notificationProvider,
  storeRepo,
  userRepo
);

//criação
paymentRoute.post(
  "/success",
  resolveController(async (req: Request, res: Response) => {
    return await sendPaymentNotificationController.handle(req, res);
  })
);