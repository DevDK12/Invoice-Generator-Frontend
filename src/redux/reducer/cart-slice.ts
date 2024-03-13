import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartReducerInitialState, TCartDelete, TCartItem } from '../../types/cart-types';



const initialState: ICartReducerInitialState = {
    cart: [],
    loading: true,
}



export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<TCartItem>) => {
            state.loading = true;
            const index = state.cart.findIndex((item) => item._id === action.payload._id);
            
            if(index !== -1){
                state.cart[index].quantity += 1;
            }
            else{
                state.cart.push(action.payload);
            }
            state.loading = false;
        },
        deleteItemFromCart: (state, action: PayloadAction<TCartDelete>) => {
            state.loading = true;

            const index = state.cart.findIndex((item) => item._id === action.payload._id);

            if(index !== -1){
                if(state.cart[index].quantity > 1){
                    state.cart[index].quantity -= 1;
                }
                else{
                    state.cart = state.cart.filter((item) => item._id !== action.payload._id);
                }
            }

            state.loading = false;
        },

        removeItemFromCart: (state, action: PayloadAction<TCartDelete>) => {
            state.loading = true;

            const index = state.cart.findIndex((item) => item._id === action.payload._id);

            if(index !== -1){
                state.cart = state.cart.filter((item) => item._id !== action.payload._id);
            }

            state.loading = false;
        },
    }


});


export const { addItemToCart, deleteItemFromCart, removeItemFromCart } = cartSlice.actions;

