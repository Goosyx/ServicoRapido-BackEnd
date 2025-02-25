import { IImagesRepository } from "../../interfaces/IImagesRepository"
import { IProductGetRequest } from "../../interfaces/IProductInterface"
import { IProductRepository } from "../../interfaces/IProductRepository"

export class DeleteProductService{
    constructor(private productRepo: IProductRepository, private imageRepo: IImagesRepository){}
    async execute({id}: IProductGetRequest): Promise<void>{
        await this.productRepo.findOneProduct(id)
        await this.imageRepo.deleteByProduct(id)
        await this.productRepo.delete(id)
    }
}