import { BaseError } from "./BaseError";

export class MissingParams extends BaseError{
    constructor(){
        super('Missing params', 400)
    }
}