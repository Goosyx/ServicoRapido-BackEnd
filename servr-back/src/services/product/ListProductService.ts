import { IProduct } from "../../interfaces/IProductInterface";
import { IProductRepository } from "../../interfaces/IProductRepository";

export class ListProductService{
    constructor(private productRepo: IProductRepository){}
        async execute(): Promise<IProduct[]>{
            const products = await this.productRepo.findAll()
            return products;
        }
    }