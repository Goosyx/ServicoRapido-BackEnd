import { IImages } from "../interfaces/IImagesInterface";
import { createUUID } from "../utils/createUUID";

export class Images{
    id: IImages['id']
    productId: IImages['productId']
    imageUrl: IImages['imageUrl']
    createdAt: IImages['createdAt']
    updatedAt: IImages['updatedAt']

    constructor(props: Omit<IImages, 'id'>, id?: string){
        this.id = id || createUUID();
        this.productId = props.productId;
        this.imageUrl = props.imageUrl;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date()
    }

    toJson(): IImages{
        return{
            id: this.id,
            productId: this.productId,
            imageUrl: this.imageUrl,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}