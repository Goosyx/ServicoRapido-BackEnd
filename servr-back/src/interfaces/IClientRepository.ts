import { IClient } from "./IClientInterface";

export interface IClientRepository {
  findAll(): Promise<IClient[]>;
  findOneClient(id: string): Promise<IClient>;
  findByEmail(email: string): Promise<IClient>;
  insert(props: IClient): Promise<IClient>;
  update(props: IClient, id: string): Promise<IClient>;
  delete(id: string): Promise<void>;
}
