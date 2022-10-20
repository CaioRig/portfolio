import { BaseError } from "./BaseError";

export class NoProductFound extends BaseError{
    constructor(){
        super('No product found with theses params', 404)
    }
}