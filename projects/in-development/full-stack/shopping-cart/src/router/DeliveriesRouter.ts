import express from 'express';
import { DeliveriesController } from '../controller/DeliveriesController';

export const DeliveriesRouter = express.Router()

const deliveriesController = new DeliveriesController()

DeliveriesRouter.post('/create', deliveriesController.createDelivery)
