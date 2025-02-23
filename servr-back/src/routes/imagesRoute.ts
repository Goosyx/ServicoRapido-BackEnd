import { Request, Response, Router } from "express";
import { IImagesRepository } from "../interfaces/IImagesRepository";
import { ImagesRepository } from "../repositories/ImagesRepository";
import { CreateImagesController } from "./controllers/images/CreateImagesController";
import { DeleteImagesController } from "./controllers/images/DeleteImagesController";
import { GetImagesByProductController } from "./controllers/images/GetImagesByProductController";
import { GetImagesController } from "./controllers/images/GetImagesController";
import { ListImagesController } from "./controllers/images/ListImagesController";
import { resolveController } from "../adapters/resolveController";

export const imagesRoute = Router()

const imageRepo: IImagesRepository = new ImagesRepository;
const createImagesController = new CreateImagesController(imageRepo)
const deleteImagesController = new DeleteImagesController(imageRepo)
const getImagesByProducts = new GetImagesByProductController(imageRepo)
const getImagesController = new GetImagesController(imageRepo)
const listImagesController = new ListImagesController(imageRepo)

imagesRoute.post('/', resolveController(async(req: Request, res: Response) => {
    return await createImagesController.handle(req, res)
}))

imagesRoute.get('/:id', resolveController(async (req: Request, res: Response)=> {
   return await getImagesController.handle(req,res)
}))

imagesRoute.get('/product/:productId', resolveController(async (req: Request, res: Response)=> {
    return await getImagesByProducts.handle(req,res)
 }))

imagesRoute.get('/', resolveController(async (_: Request, res: Response) => {
    return await listImagesController.handle(_,res)
}))

imagesRoute.delete('/:id', resolveController(async (req: Request, res: Response) => {
    return await deleteImagesController.handle(req, res)
}))