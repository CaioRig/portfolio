import { Request, Response } from "express";
import { CartBusiness } from "../business/CartBusiness";
import { cartInputDTO } from "../model/cart";

export class CartController {
    constructor(
        private cartBusiness = new CartBusiness()
    ) {
        cartBusiness = this.cartBusiness
    }

    public createOrder = async (req: Request, res: Response) => {
        try {
            const { productId,
                productQty } = req.body,

                input: cartInputDTO = {
                    productId,
                    productQty
                }
            await this.cartBusiness.createOrder(input)

            res.status(201).send("Cart order created")
        } catch (error: any) {
            res.end(error.message)
        }
    }
}