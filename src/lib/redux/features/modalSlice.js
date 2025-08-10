import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalStack: [],
    currentModal: null,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleModalOpen: (state, action) => {
            state.modalStack.push(action.payload);
        },
        handleModalClose: (state) => {
            state.modalStack.pop();
        },
        setCurrentModal: (state, action) => {
            state.currentModal = action.payload;
        },
        handleCloseAllModals: (state, action) => {
            state.modalStack = [];
            state.currentModal = null;
        },

    },
})

export const { handleModalOpen, handleModalClose, handleCloseAllModals, setCurrentModal } = modalSlice.actions
export default modalSlice.reducer