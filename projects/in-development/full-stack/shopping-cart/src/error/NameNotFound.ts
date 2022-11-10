import { BaseError } from "./BaseError";

export class NameNotFound extends BaseError{
    constructor(){
        super('Name not found', 404)
    }
}