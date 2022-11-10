import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";

export class ProductsController {
    constructor(
        private productsBusiness = new ProductsBusiness()
    ) {
        productsBusiness = this.productsBusiness
    }
    public getProductById = async (req: Request, res: Response) => {
        try {
            const productId = req.body.id

            const result = await this.productsBusiness.getProductById(productId)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).end(error.message)
        }
    }
    public getProductByName = async (req: Request, res: Response) => {
        try {
            const productName = req.body.name
            const result = await this.productsBusiness.getProductByName(productName)
            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).end(error.message)
        }
    }
    public getProductByPrice = async (req: Request, res: Response) => {
        try {
            const { price, orderBy } = req.body
            const result = await this.productsBusiness.getProductByPrice(price, orderBy)
            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).end(error.message)
        }
    }
    public getProductByQty = async (req: Request, res: Response) => {
        try {
            const { qty, orderBy } = req.body
            const result = await this.productsBusiness.getProductByQty(qty, orderBy)
            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).end(error.message)
        }
    }
}