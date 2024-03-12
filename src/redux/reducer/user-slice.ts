import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserReducerInitialState, TUser } from '../../types/user-types';



const initialState: IUserReducerInitialState = {
    user: null,
    loading: true,
}



export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        saveUser: (state, action: PayloadAction<TUser>) => {
            state.user = action.payload;
            state.loading = false;
        },
        deleteUser: (state) => {
            state.user = null;
            state.loading = false;
        },
    }


});


export const { saveUser, deleteUser } = userSlice.actions;

