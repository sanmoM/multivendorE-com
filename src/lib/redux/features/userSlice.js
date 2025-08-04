import { userItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { email } = action.payload;
            state.email = email;
        }

    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer