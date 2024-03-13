
export type TCartItem = {
    _id: string,
    name: string,
    price: number,
    photo: string,
    quantity: number,
};


export type TCartDelete = {
    _id: string
};



export interface ICartReducerInitialState {
    cart: TCartItem[];
    loading: boolean;
}



