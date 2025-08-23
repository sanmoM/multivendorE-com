import { userItems } from '@/data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    paymentMethods: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAccountType: (state, action) => {
            const { accountType } = action.payload;
            state.user.accountType = accountType;
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
        },
        setPrimaryInformation: (state, action) => {
            state.personalInformation = action.payload;
        },
        addPaymentMethod: (state, action) => {
            state.paymentMethods.push(action.payload);
        }
    },
})

export const { setUser, setAccountType, addAddresses, setPrimaryAddress, setPrimaryInformation, addPaymentMethod } = userSlice.actions
export default userSlice.reducer