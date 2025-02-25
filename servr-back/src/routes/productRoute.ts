import { Request, Response, Router } from "express";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { GetProductController } from "./controllers/product/GetProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { UpdateProductController } from "./controllers/product/UpdateProductController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { resolveController } from "../adapters/resolveController";
import { ProductRepository } from "../repositories/ProductRepository";
import { ImagesRepository } from "../repositories/ImagesRepository";
import { GetProductByUserIdController } from "./controllers/product/GetProductByUserIdController";

export const productRoute = Router();

const productRepo = new ProductRepository();
const imageRepo = new ImagesRepository();
const createProductController = new CreateProductController(
  productRepo,
  imageRepo
);
const getProductController = new GetProductController(productRepo);
const getProductByUserIdController = new GetProductByUserIdController(
  productRepo
);
const listProductController = new ListProductController(productRepo);
const updateProductController = new UpdateProductController(
  productRepo,
  imageRepo
);
const deleteProductController = new DeleteProductController(
  productRepo,
  imageRepo
);

productRoute.post(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await createProductController.handle(req, res);
  })
);

productRoute.get(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await getProductController.handle(req, res);
  })
);

productRoute.get(
  "/",
  resolveController(async (req: Request, res: Response) => {
    return await listProductController.handle(req, res);
  })
);

productRoute.put(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await updateProductController.handle(req, res);
  })
);

productRoute.delete(
  "/:id",
  resolveController(async (req: Request, res: Response) => {
    return await deleteProductController.handle(req, res);
  })
);

productRoute.get(
  "/user/:userId",
  resolveController(async (req: Request, res: Response) => {
    return await getProductByUserIdController.handle(req, res);
  })
);
