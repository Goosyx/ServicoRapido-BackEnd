import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser, IUserUpdateRequest } from "../../interfaces/IUserInterface";
import { User } from "../../entities/user";
import { AppError } from "../../errors/AppError";
import { validateCnpj, validateConfirmEmail, validateConfirmPassword, validateCpf, validateEmail, validatePassword } from "../../utils/validade";
import { IHashRepository } from "../../interfaces/IHashRepository";

export class UpdateUserService {
  constructor(private userRepo: IUserRepository,
    private hashRepo: IHashRepository) {}
  async execute({
    id,
    name,
    email,
    password,
    confirmEmail,
    confirmPassword
  }: IUserUpdateRequest): Promise<IUser> {
    const result = await this.userRepo.findOneUser(id);

    if (email && !validateEmail(email)){
      throw new AppError('Email inválido')
    }

    const user = new User(
      {
        name: name || result.name,
        email: email || result.email,
        password: result.password,
        cpf: result.cpf,
        cnpj: result.cnpj,
        userType: result.userType
      },
      result.id
    );

    const result2 = await this.userRepo.update(user.toJSON(), id);

    return result2
  }
}
