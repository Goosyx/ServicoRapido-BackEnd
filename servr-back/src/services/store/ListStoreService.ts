import { IImagesRepository } from "../../interfaces/IImagesRepository";
import { IProductRepository } from "../../interfaces/IProductRepository";
import { IListStore, IStore } from "../../interfaces/IStoreInterface";
import { IStoreRepository } from "../../interfaces/IStoreRepository";

export class ListStoreService {
  constructor(
    private storeRepo: IStoreRepository,
    private productRepo: IProductRepository,
    private imageRepo: IImagesRepository
  ) {}
  async execute(): Promise<IListStore[]> {
    const result = await this.storeRepo.findAll();
    const resultP = await this.productRepo.findAll();
    const resultImg = await this.imageRepo.findAll();

    return result.map((r) => {
      const getProducts = resultP.filter((el) => el.userId === r.userId);
      let image: string | undefined = undefined;
      if (getProducts.length > 0) {
        const lastProduct = getProducts.sort(
          (a, b) =>
            (b.updatedAt ? (new Date(b.updatedAt) as any) : new Date()) -
            (a.updatedAt ? (new Date(a.updatedAt) as any) : new Date())
        )[0];
        const imgProduct = resultImg.find(
          (el) => el.productId === lastProduct.id
        );
        image = imgProduct && imgProduct.imageUrl;
      }
      return {
        ...r,
        image,
      };
    });
  }
}
