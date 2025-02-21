import { Request, Response } from "express";
import {
  IProduct,
  IProductUpdateRequest,
} from "../../../interfaces/IProductInterface";
import { IProductRepository } from "../../../interfaces/IProductRepository";
import { UpdateProductService } from "../../../services/product/UpdateProductService";
import { IImagesRepository } from "../../../interfaces/IImagesRepository";

export class UpdateProductController {
  constructor(
    private productRepo: IProductRepository,
    private imageRepo: IImagesRepository
  ) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      title,
      description,
      price,
      quantity,
      color,
      size,
      materials,
      category,
      unit,
      weight,
      status,
      media,
    }: IProductUpdateRequest = req.body;

    const updateProductService = new UpdateProductService(
      this.productRepo,
      this.imageRepo
    );

    const result = await updateProductService.execute({
      id,
      title,
      description,
      price,
      quantity,
      color,
      size,
      materials,
      category,
      unit,
      weight,
      status,
      media,
    });

    return res.status(201).json(result);
  }
}
