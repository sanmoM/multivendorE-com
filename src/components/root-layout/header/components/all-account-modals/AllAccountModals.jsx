import Modal from '@/components/shared/modal/Modal';
import AccountInfoModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/AccountInfoModalContents';
import MyOrderModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/account-info-inner-modal-contents/my-order-modal-contents/MyOrderModalContents';
import PaymentModalContents from '@/components/shared/modal/components/modal-contents/account-info-modal-contents/account-info-inner-modal-contents/payment-modal-contents/PaymentModalContents';
import AccountRootModalContents from '@/components/shared/modal/components/modal-contents/account-root-modal-contents/AccountRootModalContents';
import AddAddressModalContents from '@/components/shared/modal/components/modal-contents/add-address-modal-contents/AddAddressModalContents';
import AddPaymentMethodModalContents from '@/components/shared/modal/components/modal-contents/add-payment-method-modal-contents/AddPaymentMethodModalContents';
import PasswordAndSecurityModalContents from '@/components/shared/modal/components/modal-contents/password-and-security-modal-contents/PasswordAndSecurityModalContents';
import PersonalInfoModalContents from '@/components/shared/modal/components/modal-contents/personal-info-modal-contents/PersonalInfoModalContents';
import useModalAction from '@/hooks/useModalAction';

export default function AllAccountModals() {
    const { currentModal, handleCloseAllModals, handleCloseModal, handleOpenModal } = useModalAction();
    return (
        <div>

            <Modal isLeft={false} isOpen={currentModal === "account-root-modal"} setIsOpen={() => handleCloseModal()} title={"Account"}>
                <AccountRootModalContents handleCloseModal={handleCloseAllModals} />
            </Modal>
            {/* profile settings modals */}
            <Modal isLeft={false} isOpen={currentModal === "account-information-modal"} setIsOpen={() => handleCloseModal()} title={"Account Information"}>
                <AccountInfoModalContents />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "personal-information-modal"} setIsOpen={() => handleCloseModal()} title={"Personal Information"}>
                <PersonalInfoModalContents handleCloseModal={handleCloseAllModals} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "payment-modal"} setIsOpen={() => handleCloseModal()} title={"Payment Methods"}>
                <PaymentModalContents handleAddPaymentMethod={() => handleOpenModal("add-payment-method-modal")} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "my-orders-modal"} setIsOpen={() => handleCloseModal()} title={"My Orders"}>
                <MyOrderModalContents />
            </Modal>
            {/* <Modal isLeft={false} isOpen={currentModal === "my-address-modal"} setIsOpen={() => handleCloseModal()} title={"My Address"}>
                    <AddressModalContents handleAddAddress={() => handleOpenModal("add-address-modal")} />
                </Modal> */}
            <Modal isLeft={false} isOpen={currentModal === "add-address-modal"} setIsOpen={() => handleCloseModal()} title={"My Address"}>
                <AddAddressModalContents handleCloseAllModal={handleCloseAllModals} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "add-payment-method-modal"} setIsOpen={() => handleCloseModal()} title={"Payment Methods"}>
                <AddPaymentMethodModalContents handleCloseModal={handleCloseModal} />
            </Modal>
            <Modal isLeft={false} isOpen={currentModal === "password-and-security-modal"} setIsOpen={() => handleCloseModal()} title={"Password and Security"}>
                <PasswordAndSecurityModalContents handleCloseModal={handleCloseAllModals} />
            </Modal>
        </div>
    )
}
