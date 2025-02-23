import { Request, Response } from "express";
import { IStoreRepository } from "../../../interfaces/IStoreRepository";
import { GetStoreService } from "../../../services/store/GetStoreService";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { NotificationProvider } from "../../../providers/notificationProvider";
import { SuccessNotificationPaymentService } from "../../../services/payments/successNotification";

export class SendPaymentNotificationController {
  constructor(
    private notificationProvider: NotificationProvider,
    private storeRepo: IStoreRepository,
    private userRepo: IUserRepository,
  ){}

  async handle(req: Request, res: Response): Promise<Response>{
    const body = req.body;

    const sendEmail = new SuccessNotificationPaymentService(
      this.notificationProvider,
      this.storeRepo, 
      this.userRepo
    )

    const result = await sendEmail.execute(body)

    return res.json(result)
  }
}