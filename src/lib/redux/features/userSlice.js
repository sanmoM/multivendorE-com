import { userItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mobile: "",
    accountType: "customer",
    addresses: [],
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
        },
        addAddresses: (state, action) => {
            if (state.addresses.length === 0) {
                action.payload.isPrimary = true;
            } else {
                action.payload.isPrimary = false;
            }
            action.payload.id = state.addresses.length + 1;
            state.addresses.push(action.payload);
        },
        setPrimaryAddress: (state, action) => {
            const selectedId = action.payload;

            state.addresses.forEach(addr => {
                addr.isPrimary = addr.id === selectedId;
            });
        }
    },
})

export const { setUser, setAccountType, addAddresses, setPrimaryAddress } = userSlice.actions
export default userSlice.reducer