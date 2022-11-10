import { Request, Response } from "express"
import { DeliveriesBusiness } from "../business/DeliveriesBusiness"

export class DeliveriesController {
    constructor(
        private deliveriesBusiness = new DeliveriesBusiness()
    ) {
        deliveriesBusiness = this.deliveriesBusiness
    }
    public createDelivery = async (req: Request, res: Response) => {
        try {
            const { deliveryDate,
                userId,
                userName
                 } = req.body,
                 
                input = {
                    deliveryDate,
                    userId,
                    userName    
                };

            await this.deliveriesBusiness.createDelivery(input)
        } catch (error: any) {
            res.end(error.message)
        }
    }
}