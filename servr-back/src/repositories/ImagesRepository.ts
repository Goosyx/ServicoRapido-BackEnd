import { PrismaClient } from "@prisma/client";
import { IImagesRepository } from "../interfaces/IImagesRepository";
import { IImages } from "../interfaces/IImagesInterface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient()

export class ImagesRepository implements IImagesRepository{
    async findAll(): Promise<IImages[]> {
        const result = await prisma.images.findMany()

        return result
    }

    async findOneImage(id: string): Promise<IImages> {
        const result = await prisma.images.findUnique({
            where: {id}
        })

        if(!result) throw new AppError('Image not found')

        return result
    }

    async create(props: IImages): Promise<IImages> {
        const result = await prisma.images.create({
            data: props
        })

        return result
    }

    async delete(id: string): Promise<void> {
        const image = await prisma.images.findUnique({
            where: { id }
        })

        if(!image) throw new AppError('Image not found')
        await prisma.images.delete({
            where: { id }
        })
    }

    async getByProduct(productId: string): Promise<IImages[]> {
        const result = await prisma.images.findMany({
            where: { productId }
        })

        return result
    }

    async deleteByProduct(productId: string): Promise<void> {
        await prisma.images.deleteMany({
            where: {productId}
        })
    }
    
}