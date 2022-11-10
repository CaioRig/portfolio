export interface cartInputDTO {
    productId: string,
    productQty: string
}

export interface cartOutputDTO {
    id: string,
    productId: string,
    productQty: string,
    productPrice: number,
    totalPrice: number
}