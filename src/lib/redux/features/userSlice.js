import { userItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    accountType: "customer",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { email } = action.payload;
            state.email = email;
        },
        setAccountType: (state, action) => {
            const { accountType } = action.payload;
            state.accountType = accountType;
        }
    },
})

export const { setUser, setAccountType } = userSlice.actions
export default userSlice.reducer