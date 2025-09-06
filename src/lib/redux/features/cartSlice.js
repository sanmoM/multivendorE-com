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
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const item = state.cartItems.find(item => item.id === id);
            if (item) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            }
        },
        removeAllFromCart: (state) => {
            state.cartItems = [];
        },
    },
})

export const { handleQuantity, addToCart, removeAllFromCart } = cartSlice.actions
export default cartSlice.reducer