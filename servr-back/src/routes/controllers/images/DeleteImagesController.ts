import { Request, Response } from "express";
import { IImagesRepository } from "../../../interfaces/IImagesRepository";
import { DeleteImageService } from "../../../services/images/DeleteImagesService";

export class DeleteImagesController{
    constructor(private imageRepo: IImagesRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deleteImagesService = new DeleteImageService(this.imageRepo)

        await deleteImagesService.execute({ id })

        return res.status(200).send()
    }
}