import { BaseError } from "./BaseError";

export class LowStock extends BaseError {
    constructor() {
        super("Quantity of product in stock too low for this order", 400)
    }
}