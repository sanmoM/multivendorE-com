import { cartItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = cartItems;

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleQuantity: (state, action) => {
            // handle quantity logic
            const { id, quantity } = action.payload;
            const item = state.find(item => item.id === id);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
        },
    },
})

export const { handleQuantity } = cartSlice.actions
export default cartSlice.reducer