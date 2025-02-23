import { Product } from "../../entities/product";
import { IImagesRepository } from "../../interfaces/IImagesRepository";
import {
  IProduct,
  IProductUpdateRequest,
} from "../../interfaces/IProductInterface";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { createUUID } from "../../utils/createUUID";

export class UpdateProductService {
  constructor(
    private productRepo: IProductRepository,
    private imageRepo: IImagesRepository
  ) {}
  async execute({
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
  }: IProductUpdateRequest): Promise<IProduct> {
    const result = await this.productRepo.findOneProduct(id);

    const product = new Product(
      {
        userId: result.userId,
        title: title || result.title,
        description: description || result.description,
        price: price || result.price,
        quantity: quantity || result.quantity,
        color: color || result.color,
        size: size || result.size,
        materials: materials || result.materials,
        category: category || result.category,
        unit: unit || result.unit,
        weight: weight || result.weight,
        status: status !== undefined ? status : result.status,
      },
      result.id
    );

    const res = await this.productRepo.update(product.toJson(), id);

    if (media && media.length > 0) {
      let i = 0;
      const productId = result.id;
      while (i < media.length) {
        const imageUrl = media[i];
        await this.imageRepo.create({ id: createUUID(), productId, imageUrl });
        i++;
      }
    }

    return res;
  }
}
