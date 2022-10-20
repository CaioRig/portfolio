import { BaseError } from "./BaseError";

export class IdNotFound extends BaseError{
    constructor(){
        super('Id not found', 404)
    }
}