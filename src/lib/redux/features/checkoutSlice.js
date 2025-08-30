// import { cartItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    checkoutItems: [],
};

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setCheckoutItems: (state, action) => {
            state.checkoutItems = action.payload;
        },
    },
})

export const { setCheckoutItems } = checkoutSlice.actions
export default checkoutSlice.reducer