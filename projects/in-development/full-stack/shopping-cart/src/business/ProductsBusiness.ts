import { ProductsDatabase } from "../data/ProductsDatabase"
import { IdNotFound } from "../error/IdNotFound"
import { MissingParams } from "../error/MissingParams"
import { NameNotFound } from "../error/NameNotFound"
import { NoProductFound } from "../error/NoProductFound"

export class ProductsBusiness {
    constructor(
        private productsDatabase = new ProductsDatabase()
    ) {
        productsDatabase = this.productsDatabase
    }
    public getProductById = async (id: string) => {
        const productId: string = id
        try {
            if (!productId) {
                throw new MissingParams()
            }
            const result = await this.productsDatabase.getProductById(productId);
            if (result.length === 0) {
                throw new IdNotFound()
            }
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    public getProductByName = async (name: string) => {
        try {
            const productName = name
            if (!productName) {
                throw new MissingParams()
            }
            const result = await this.productsDatabase.getProductByName(productName)
            if (result.length === 0) {
                throw new NameNotFound()
            }
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    public getProductByPrice =async (price: number, orderBy: string) => {
        try {
            const productPrice = price, orderProductBy = orderBy;
            if(!productPrice){
                throw new MissingParams()
            }
            if(!orderProductBy || orderProductBy === ''){
                orderProductBy === 'asc'
            }
            const result = await this.productsDatabase.getProductByPrice(productPrice, orderProductBy)
            if (result.length === 0) {
                throw new NoProductFound()
            }
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    public getProductByQty =async (qty: number, orderBy: string) => {
        try {
            const qytInStock = qty, orderProductBy = orderBy;
            if(!qytInStock){
                throw new MissingParams()
            }
            if(!orderProductBy || orderProductBy === ''){
                orderProductBy === 'asc'
            }
            const result = await this.productsDatabase.getProductByQty(qytInStock, orderProductBy)
            if (result.length === 0) {
                throw new NoProductFound()
            }
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}