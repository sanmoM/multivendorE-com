// import { cartItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
        },
        addToCart: (state, action) => {
            const { id, type } = action.payload;
            const item = state.cartItems.find(item => item.id === id && item.type === type);
            if (item) {
                // ✅ directly update the proxy object (Immer takes care of immutability)
                item.quantity += action.payload.quantity || 1;
            } else {
                state.cartItems.push({ ...action.payload });
            }
        }
    },
})

export const { handleQuantity, addToCart } = cartSlice.actions
export default cartSlice.reducer