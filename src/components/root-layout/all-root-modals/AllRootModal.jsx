"use client"

import Modal from '@/components/shared/modal/Modal'
import React from 'react'
import NotificationModalContents from './modal-contents/notification-modal-contents/NotificationModalContents'
import useModalAction from '@/hooks/useModalAction'

export default function AllRootModal() {
    const { currentModal, handleCloseModal } = useModalAction()
    console.log(currentModal, "currentModal")
    return (
        <div>

            <Modal isLeft={false} isOpen={currentModal === "notification-modal"} setIsOpen={handleCloseModal} title={"Notifications"}>
                <NotificationModalContents />
            </Modal>
        </div>
    )
}
