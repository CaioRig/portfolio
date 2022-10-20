import { CartDatabase } from "../data/CartDatabase";
import { LowStock } from "../error/LowStock";
import { MissingParams } from "../error/MissingParams";
import { cartInputDTO, cartOutputDTO } from "../model/cart";
import { generateId } from "../services/generateId";

export class CartBusiness {
    constructor(
        private cartDatabase = new CartDatabase()
    ){
        cartDatabase = this.cartDatabase
    }
    public createOrder = async (input: cartInputDTO) => {
        try {
            const { productId,
                productQty } = input
            if(!productId || !productQty){
                throw new MissingParams()
            }
            const productData = await this.cartDatabase.getProductQtyPrice(productId)
            if(productQty > productData.qty_stock){
                throw new LowStock()
            }
            const id = generateId()
            const totalPrice = productData.price * Number(productQty)
            const newOrder: cartOutputDTO = {
                id,
                productId: productData.id,
                productQty,
                productPrice: productData.price,
                totalPrice
            }

            console.log(newOrder)

            await this.cartDatabase.createCart(newOrder)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}