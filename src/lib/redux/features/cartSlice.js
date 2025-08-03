import { cartItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: cartItems,
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
        }

    },
})

export const { handleQuantity } = cartSlice.actions
export default cartSlice.reducer