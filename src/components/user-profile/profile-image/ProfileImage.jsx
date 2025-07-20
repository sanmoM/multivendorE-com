import React from 'react'
import InfoTab from '../profile-tabs/info-tab/InfoTab'

export default function ProfileImage() {
    return (
        <div className="w-[40%] max-md:w-full max-sm:w-full">
            <div
                className="w-[200px] h-[200px] rounded-md mt-3 mb-2 mx-auto border"
            >
                <img
                    src="https://i.ibb.co/PzDTBmqf/g2juhlin4zfmrdjvbhen.webp"
                    alt=""
                    className="w-full h-full rounded-sm object-cover"
                />
            </div>
            <div className="mx-auto flex flex-col items-center gap-2">
                <label
                    for="file-upload"
                    className="cursor-pointer px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                    Browse Image
                </label>
                <input id="file-upload" type="file" className="hidden" />
            </div>
        </div>
    )
}
