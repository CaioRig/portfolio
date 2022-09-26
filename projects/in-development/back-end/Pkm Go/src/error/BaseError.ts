export abstract class BaseError extends Error {
    constructor(message: string, code: number) {
        super(message);
    }
}

export class MissingParams extends BaseError {
    constructor() {
        super('Missing parameters', 400)
    }
}

export class NameNotFound extends BaseError {
    constructor() {
        super('Name not found', 404)
    }
}

export class TypeNotFound extends BaseError {
    constructor() {
        super('Type not found', 404)
    }
}

export class NumberNotFound extends BaseError {
    constructor() {
        super('Number not found', 404)
    }
}

export class InputMustBeNumber extends BaseError {
    constructor() {
        super('Input must be a number', 400)
    }
}

export class PkmHasNoEvolution extends BaseError {
    constructor() {
        super('Pokemon have no evolution', 400)
    }
}