import express from 'express';
import { CartController } from '../controller/CartController';

export const CartRouter = express.Router()

const cartController = new CartController()

CartRouter.post('/create', cartController.createOrder)