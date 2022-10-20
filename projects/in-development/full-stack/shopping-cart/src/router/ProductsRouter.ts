import express from 'express';
import { ProductsController } from '../controller/ProductsController';

export const ProductsRouter = express.Router()

const productsController = new ProductsController();

ProductsRouter.get('/id', productsController.getProductById)
ProductsRouter.get('/name', productsController.getProductByName)
ProductsRouter.get('/price', productsController.getProductByPrice)
ProductsRouter.get('/qty', productsController.getProductByQty)