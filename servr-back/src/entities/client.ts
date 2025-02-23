import { IClient } from "../interfaces/IClientInterface";
import { createUUID } from "../utils/createUUID";

export class Client {
  id: IClient["id"];
  name: IClient["name"];
  email: IClient["email"];
  password: IClient["password"];
  confirmEmail: IClient["confirmEmail"];
  confirmPassword: IClient["confirmPassword"];
  createdAt: IClient["createdAt"];
  updatedAt: IClient["updatedAt"];

  constructor(props: Omit<IClient, "id">, id?: string) {
    this.id = id || createUUID();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.confirmEmail = props.confirmEmail;
    this.confirmPassword = props.confirmPassword;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = new Date();
  }

  toJSON(): IClient {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      confirmEmail: this.confirmEmail,
      confirmPassword: this.confirmPassword,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
