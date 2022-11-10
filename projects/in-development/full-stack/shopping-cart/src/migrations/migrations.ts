import { BaseDatabase } from "../data/BaseDatabase";
import productsDTO from "../model/products";
import Products from './products.json'

class Migrations extends BaseDatabase {
    async migrateData(input: productsDTO) {
        const TABLE_NAME = 'Shopper_products'

        try {
            await Migrations.connection(TABLE_NAME)
                .insert({
                    id: input.id,
                    name: input.name,
                    price: input.price,
                    qty_stock: input.qtyStock
                })
            console.log(`Product ${input.name} added to table`)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}

const turnIntoObjectAndPopulate = async (objectData: any[]) => {
    const migrations = new Migrations()

    objectData.forEach(async (product) => {
        if (product.qtyStock === '') {
            product.qtyStock = 0
        }

        const newProduct: productsDTO = {
            id: product.id,
            name: product.name,
            price: product.price,
            qtyStock: product.qtyStock
        }
        try {
            await migrations.migrateData(newProduct)
        } catch (error: any) {
            throw new Error(error.message)
        }
    })
}

turnIntoObjectAndPopulate(Products)
