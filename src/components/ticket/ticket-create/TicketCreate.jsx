import Button from '@/components/shared/button/Button'
import TextInput from '@/components/shared/inputs/text-input/TextInput'
import SingleImageInput from '@/components/shared/single-image-input/SingleImageInput'
import PrimaryTitle from '@/components/shared/title/PrimaryTitle'
import useAuthAxios from '@/hooks/useAuthAxios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function TicketCreate({ setStep }) {
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [image, setImage] = useState('')

    const axios = useAuthAxios()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('subject', subject)
        formData.append('message', message)
        formData.append('file', image)
        if (subject && message) {
            try {
                const res = await axios.post('/tickets', formData)
                toast.success("Ticket Created Successfully")
                setStep('ticket-view')
            } catch (error) {
                toast.error("Something went wrong, please try again later")
            }
        }else{
            toast.error("Please fill all required fields")
        }
    }
    return (
        <div className='flex justify-center items-center h-[calc(100vh-136px)] w-full'>
            <div className="bg-white rounded-3xl border border-secondary p-8 max-w-lg w-full">
                <PrimaryTitle title={"Create Ticket"} className={"text-center"} />
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <TextInput placeholder="Subject" value={subject} setValue={setSubject} />
                    <TextInput placeholder="Message" value={message} setValue={setMessage} />
                    <SingleImageInput image={image} setImage={setImage} />
                    <Button text={"Create Ticket"} className={"bg-red-600 text-white mx-auto block"} />
                </form>
            </div>
        </div>
    )
}
