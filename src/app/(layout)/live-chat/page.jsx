import MobileHeader from "@/components/root-layout/header/components/mobile-header/MobileHeader";
import Container from "@/components/shared/container/Container";
import Logo from "@/components/shared/logo/Logo";
import Image from "next/image";
import React from "react";

export default function ChatInterface() {
    return (
        <div>
            <MobileHeader title={"Live Chat"} containerClassName={"mb-6"} />
            <Container className=" flex flex-col py-0">
                {/* Chat Header */}
                <header className="bg-tertiary text-white p-4 rounded-t-2xl">
                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Logo className={"w-10 h-10 text-primary"} />
                            <div>
                                <h1 className="font-bold text-primary">Live Chat</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 hover:bg-secondary/30 rounded-full transition" type="button" aria-label="More options">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="#856161"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Chat Messages */}
                <main className="overflow-y-auto p-4 border-x-2">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {/* Receiver Message */}
                        <div className="flex items-start space-x-2">
                            <img
                                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
                                alt="Abhiraj"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                                <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md max-w-md">
                                    <p>
                                        Hi there! Welcome to my portfolio chat. Feel free to explore my work at{" "}
                                        <a
                                            href="https://abhirajk.vercel.app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary"
                                        >
                                            abhirajk.vercel.app
                                        </a>
                                    </p>
                                </div>
                                <span className="text-gray-500 text-xs message-time">11:42 AM</span>
                            </div>
                        </div>

                        {/* Sender Message */}
                        <div className="flex items-start justify-end space-x-2">
                            <div className="flex flex-col items-end">
                                <div className="bg-tertiary text-primary rounded-lg rounded-tr-none p-3 shadow-md max-w-md mb-1">
                                    <p>Amazing work! I'm impressed with your projects and technical skills.</p>
                                </div>
                                <span className="text-gray-500 text-xs message-time">11:43 AM</span>
                            </div>
                            <img
                                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
                                alt="User"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        </div>

                        {/* Receiver Message */}
                        <div className="flex items-start space-x-2">
                            <img
                                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
                                alt="Abhiraj"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                                <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md max-w-md">
                                    <p>
                                        Thank you! I specialize in full-stack development using modern
                                        technologies. Would you like to discuss a potential collaboration?
                                    </p>
                                </div>
                                <span className="text-gray-500 text-xs message-time">11:44 AM</span>
                            </div>
                        </div>

                        {/* Typing Indicator */}
                        <div className="flex items-start space-x-2">
                            <img
                                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
                                alt="Abhiraj"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md">
                                <div className="typing-indicator">
                                    <span>•</span>
                                    <span>•</span>
                                    <span>•</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Chat Input */}
                <footer className="bg-tertiary p-4 rounded-b-2xl">
                    <div className="max-w-4xl mx-auto flex items-center space-x-2 lg:space-x-4">
                        <button
                            className=" text-gray-500 hover:text-gray-700 transition"
                            type="button"
                            aria-label="Emoji"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </button>
                        <button
                            className=" text-gray-500 hover:text-gray-700 transition"
                            type="button"
                            aria-label="Attachment"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                />
                            </svg>
                        </button>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 p-2 border !border-secondary rounded-full focus:outline-none focus:!border-secondary"
                        />
                        <button
                            className="p-2 text-white transition border !border-secondary rounded-full"
                            type="button"
                            aria-label="Send message"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="#856161"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </div>
                </footer>
            </Container>
        </div>
    );
}
