import { IProduct } from "../interfaces/IProductInterface";
import { createUUID } from "../utils/createUUID";

export class Product {
  id: IProduct["id"];
  userId: IProduct["userId"];
  title: IProduct["title"];
  description: IProduct["description"];
  price: IProduct["price"];
  status: IProduct["status"];
  quantity: IProduct["quantity"];
  color: IProduct["color"];
  size: IProduct["size"];
  materials: IProduct["materials"];
  category: IProduct["category"];
  unit: IProduct["unit"];
  weight: IProduct["weight"];
  createdAt: IProduct["createdAt"];
  updatedAt: IProduct["updatedAt"];

  constructor(props: Omit<IProduct, "id">, id?: string) {
    this.id = id || createUUID();
    (this.title = props.title),
      (this.description = props.description),
      (this.userId = props.userId);
    this.price = props.price;
    this.status = props.status !== undefined ? props.status : true;
    this.quantity = props.quantity;
    this.color = props.color;
    this.size = props.size;
    this.materials = props.materials;
    this.category = props.category;
    this.unit = props.unit;
    this.weight = props.weight;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = new Date();
  }

  toJson(): IProduct {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      userId: this.userId,
      price: this.price,
      status: this.status,
      quantity: this.quantity,
      color: this.color,
      size: this.size,
      materials: this.materials,
      category: this.category,
      unit: this.unit,
      weight: this.weight,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
