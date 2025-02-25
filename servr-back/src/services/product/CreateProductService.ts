import { Product } from "../../entities/product";
import { IImagesCreateRequest } from "../../interfaces/IImagesInterface";
import { IImagesRepository } from "../../interfaces/IImagesRepository";
import { IProduct, IProductCreateRequest } from "../../interfaces/IProductInterface";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { createUUID } from "../../utils/createUUID";

export class CreateProductService {
    constructor(private productRepo: IProductRepository, private imageRepo: IImagesRepository) {}
    async execute({
        userId,
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
        media
    }: IProductCreateRequest): Promise<IProduct> {
      
      const product = new Product({
        userId,
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
        status
      });
      const result = await this.productRepo.insert(product.toJson());

      if(media && media.length > 0){
        let i = 0;
        const productId = result.id
        while(i < media.length){
          const imageUrl = media[i]
          await this.imageRepo.create({id: createUUID(), productId, imageUrl })
          i++;
        }
      }

      return result
    }
  }