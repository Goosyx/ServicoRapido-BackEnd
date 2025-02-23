import express, { NextFunction, Request, Response } from "express";
import { route } from "./routes";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import { AppError } from "./errors/AppError";
import cors from 'cors'
import config from './config/config';

require("dotenv").config({ path: ".env" });

const prisma = new PrismaClient();
prisma.$connect();

//criando backend através do express
const app = express();

app.use(cors(config.cors))

app.use(express.json());
//backend usa rota raiz
app.use(route);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: `Internal Server Error - ${err.message}`,
  });
});

app.options('*', cors(config.cors))

//executa o backend na porta mencionada e após, executa a função callback
app.listen(Number(process.env.PORT), () => {
  console.log("Backend Rodando");
});
