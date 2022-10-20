import { cartOutputDTO } from "../model/cart";
import { BaseDatabase } from "./BaseDatabase";
import { ProductsDatabase } from "./ProductsDatabase";

export class CartDatabase extends BaseDatabase {
    private TABLE_NAME = 'Shopper_cart'
    public getProductQtyPrice = async (id: string) => {
        try {
            this.TABLE_NAME = 'Shopper_products'
            const productsDatabase = new ProductsDatabase()
            const productData = await productsDatabase.getProductById(id)

            return productData[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public createCart = async (newOrder: cartOutputDTO) => {
        try {
            this.TABLE_NAME = 'Shopper_cart'
            await CartDatabase.connection(this.TABLE_NAME)
            .insert({
                id: newOrder.id,
                product_id: newOrder.productId,
                product_qty: newOrder.productQty,
                product_price: newOrder.productPrice,
                total_price: newOrder.totalPrice
            })
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}