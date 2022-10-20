import { MissingParams } from "../error/MissingParams";
import { deliveryDTO } from "../model/deliveries";
import { generateId } from "../services/generateId";

export class DeliveriesBusiness {
    public createDelivery = async (input: deliveryDTO) => {
        try {
            const {
                deliveryDate,
                userId,
                userName,
            } = input
            if(!deliveryDate || !userId || !userName){
                throw new MissingParams()
            }
            const deliveryId = generateId()
            
        } catch (error: any) {

        }
    }
}