import { IProductGetRequest, IProduct } from "../../interfaces/IProductInterface";
import { IProductRepository } from "../../interfaces/IProductRepository";

export class GetProductService{
    constructor(private productRepo: IProductRepository){}
    async execute({id}: IProductGetRequest): Promise<IProduct>{
        const result = await this.productRepo.findOneProduct(id)
        return result;
    }
}