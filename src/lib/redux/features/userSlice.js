import { userItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mobile: "",
    accountType: "customer",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { mobile } = action.payload;
            state.mobile = mobile;
        },
        setAccountType: (state, action) => {
            const { accountType } = action.payload;
            state.accountType = accountType;
        }
    },
})

export const { setUser, setAccountType } = userSlice.actions
export default userSlice.reducer