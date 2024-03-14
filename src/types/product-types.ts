import { TCartItem } from "./cart-types";

export type TProduct = {
    _id: string,
    name: string,
    price: number,
    stock: number,
    photo: string,
    category: string,
};


export type TInvoice = {
    userName: string,
    userId: string,
    userEmail: string,
    products: TCartItem[],
    total: number,
    gst: number,
    grandTotal: number,
}