import { Request, Response } from "express";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { CreateUserService } from "../../../services/user/CreateUserService";
import { IHashRepository } from "../../../interfaces/IHashRepository";
import { IStoreRepository } from "../../../interfaces/IStoreRepository";
import { createUUID } from "../../../utils/createUUID";

export class CreateUserController {
  constructor(
    private userRepo: IUserRepository,
    private hashRepo: IHashRepository,
    private storeRepo: IStoreRepository
  ) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      cpf,
      cnpj,
      userType,
      confirmEmail,
      confirmPassword,
      companyName,
    } = req.body;

    const createUserService = new CreateUserService(
      this.userRepo,
      this.hashRepo
    );

    const user = await createUserService.execute({
      name,
      email,
      password,
      cpf,
      cnpj,
      userType,
      confirmEmail,
      confirmPassword,
    });

    if (companyName && cnpj) {
      await this.storeRepo.insert({
        id: createUUID(),
        name: companyName,
        userId: user.id,
      });
    }

    return res.status(201).json(user);
  }
}
