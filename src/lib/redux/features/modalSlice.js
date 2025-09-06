import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalStack: [],
    currentModal: null,
    modalData: null,
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
        setNextModalData: (state, action) => {
            state.modalData = action.payload;
        },
    },
})

export const { handleModalOpen, handleModalClose, handleCloseAllModals, setCurrentModal, setNextModalData } = modalSlice.actions
export default modalSlice.reducer