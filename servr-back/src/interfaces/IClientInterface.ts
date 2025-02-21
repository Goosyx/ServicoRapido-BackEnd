export interface IClient {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmEmail?: string;
  confirmPassword?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IClientCreateRequest {
  name: string;
  email: string;
  password: string;
  confirmEmail?: string;
  confirmPassword?: string;
}

export interface IClientGetRequest {
  id: string;
}

export interface IClientUpdateRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmEmail?: string;
  confirmPassword?: string;
}

export interface IClientDeleteRequest {
  id: string;
}

export interface IClientAuthenticateRequest {
  email: string;
  password: string;
}
