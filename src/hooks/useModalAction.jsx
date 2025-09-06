import { handleCloseAllModals as handleCloseAllModalsAction, handleModalClose as handleCloseModalAction, handleModalOpen as handleOpenModalAction, setCurrentModal as setCurrentModalAction, setNextModalData as setNextModalDataAction } from "@/lib/redux/features/modalSlice";
import { useDispatch, useSelector } from 'react-redux';

export default function useModalAction() {
    const currentModal = useSelector(state => state.modal?.currentModal);
    const modalData = useSelector(state => state.modal?.modalData);
    const modalStack = useSelector(state => state.modal?.modalStack);
    const dispatch = useDispatch();

    const handleCloseAllModals = () => {
        dispatch(handleCloseAllModalsAction());
    }

    const handleCloseModal = () => {
        dispatch(handleCloseModalAction());
        dispatch(setCurrentModalAction(null));
        setTimeout(() => {
            dispatch(setCurrentModalAction(modalStack.length > 1 ? modalStack[modalStack.length - 2] : null));
        }, 300);
    }
    const handleOpenModal = (modalName) => {
        dispatch(handleOpenModalAction(modalName));
        dispatch(setCurrentModalAction(null));
        if (modalStack.length !== 0) {
            setTimeout(() => {
                dispatch(setCurrentModalAction(modalName));
            }, 300);
        } else {
            dispatch(setCurrentModalAction(modalName));
        }
    }

    const setNextModalData = (data) => {
        dispatch(setNextModalDataAction(data));
    }


    return { currentModal, modalData, handleCloseAllModals, handleCloseModal, handleOpenModal, setNextModalData };
}
