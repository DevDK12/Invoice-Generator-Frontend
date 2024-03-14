import { TProduct } from "./product-types";
import { TUser } from "./user-types"


export type MesssageResponse = {
    status: string,
    message: string,
    data: {
        user: TUser,
        accessToken: string,
        expiryTime: string,
    }
}



export interface ICustomError {
    status: string,
    message: string,
    error?: string;
    stack?: string;
}


export interface ErrorResponse {
    status: number,
    data: ICustomError
}


export type ProductsResponse = {
    status: string,
    data: {
        products: TProduct[]
    }
}


export type InvoiceResponse = {
    status: string,
    data: {
        invoice: string
    }
}