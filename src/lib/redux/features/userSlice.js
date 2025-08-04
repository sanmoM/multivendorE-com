import { userItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    phone: "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { phone } = action.payload;
            state.phone = phone;
        }

    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer