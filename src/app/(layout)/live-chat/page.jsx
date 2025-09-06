// "use client";

// import MobileHeader from "@/components/root-layout/header/components/mobile-header/MobileHeader";
// import Container from "@/components/shared/container/Container";
// import FallbackImage from "@/components/shared/fallback-image/FallbackImage";
// import Logo from "@/components/shared/logo/Logo";
// import useAuthAxios from "@/hooks/useAuthAxios";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// export default function ChatInterface() {
//     const user = useSelector((state) => state.user?.user);
//     const [messages, setMessages] = useState([]);

//     const axios = useAuthAxios();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await axios.get(`/ticket/replay/create/1`);
//                 setMessages(res?.data?.messages);
//             } catch (error) {
//                 console.log(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         fetchData();
//     }, []);

//     console.log(messages, "messages");
//     return (
//         <div>
//             <MobileHeader title={"Live Chat"} containerClassName={"mb-6"} />
//             <Container className=" flex flex-col py-0">
//                 {/* Chat Header */}
//                 <header className="bg-tertiary text-white p-4 rounded-t-2xl">
//                     <div className="max-w-4xl mx-auto flex items-center justify-between">
//                         <div className="flex items-center space-x-4">
//                             <Logo className={"w-10 h-10 text-primary"} />
//                             <div>
//                                 <h1 className="font-bold text-primary">Live Chat</h1>
//                             </div>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                             <button className="p-2 hover:bg-secondary/30 rounded-full transition" type="button" aria-label="More options">
//                                 <svg
//                                     className="w-5 h-5"
//                                     fill="none"
//                                     stroke="#856161"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </header>

//                 {/* Chat Messages */}
//                 <main className="overflow-y-auto p-4 border-x-2">
//                     <div className="max-w-4xl mx-auto space-y-4">

//                         {
//                             messages?.map((message, index) => (
//                                 message?.type === "support" ?
//                                     (<div className="flex items-start space-x-2">
//                                         <Logo className={"w-8 h-8 text-primary"} />
//                                         <div>
//                                             <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md max-w-md">
//                                                 <p>
//                                                     {message?.message}
//                                                 </p>
//                                             </div>
//                                             <span className="text-gray-500 text-xs message-time">11:44 AM</span>
//                                         </div>
//                                     </div>)
//                                     :
//                                     (<div className="flex items-start justify-end space-x-2">
//                                         <div className="flex flex-col items-end">
//                                             <div className="bg-tertiary text-primary rounded-lg rounded-tr-none p-3 shadow-md max-w-md mb-1">
//                                                 <p>{message?.message}</p>
//                                             </div>
//                                             <span className="text-gray-500 text-xs message-time">11:43 AM</span>
//                                         </div>
//                                         <FallbackImage
//                                             src={user?.image}
//                                             alt={message?.sender?.name}
//                                             className="w-8 h-8 rounded-full object-cover"
//                                             width={40}
//                                             height={40}
//                                         />
//                                     </div>)
//                             ))
//                         }


//                         {/* Typing Indicator
//                         <div className="flex items-start space-x-2">
//                             <img
//                                 src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
//                                 alt="Abhiraj"
//                                 className="w-8 h-8 rounded-full object-cover"
//                             />
//                             <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md">
//                                 <div className="typing-indicator">
//                                     <span>•</span>
//                                     <span>•</span>
//                                     <span>•</span>
//                                 </div>
//                             </div>
//                         </div> */}
//                     </div>
//                 </main>

//                 {/* Chat Input */}
//                 <footer className="bg-tertiary p-4 rounded-b-2xl">
//                     <div className="max-w-4xl mx-auto flex items-center space-x-2 lg:space-x-4">
//                         <button
//                             className=" text-gray-500 hover:text-gray-700 transition"
//                             type="button"
//                             aria-label="Emoji"
//                         >
//                             <svg
//                                 className="w-6 h-6"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                                 />
//                             </svg>
//                         </button>
//                         <button
//                             className=" text-gray-500 hover:text-gray-700 transition"
//                             type="button"
//                             aria-label="Attachment"
//                         >
//                             <svg
//                                 className="w-6 h-6"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
//                                 />
//                             </svg>
//                         </button>
//                         <input
//                             type="text"
//                             placeholder="Type your message..."
//                             className="flex-1 p-2 border !border-secondary rounded-full focus:outline-none focus:!border-secondary"
//                         />
//                         <button
//                             className="p-2 text-white transition border !border-secondary rounded-full"
//                             type="button"
//                             aria-label="Send message"
//                         >
//                             <svg
//                                 className="w-6 h-6"
//                                 fill="none"
//                                 stroke="#856161"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                                 />
//                             </svg>
//                         </button>
//                     </div>
//                 </footer>
//             </Container>
//         </div>
//     );
// }


"use client";

import MobileHeader from "@/components/root-layout/header/components/mobile-header/MobileHeader";
import Container from "@/components/shared/container/Container";
import FallbackImage from "@/components/shared/fallback-image/FallbackImage";
import Logo from "@/components/shared/logo/Logo";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { IoSendSharp } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";

export default function ChatInterface() {
    const searchParams = useSearchParams();
    const ticketId = searchParams.get("ticketId");

    const user = useSelector((state) => state.user?.user);
    const axios = useAuthAxios();
    const queryClient = useQueryClient();

    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    // ✅ Fetch messages
    const { data: messages = [], isLoading, isError } = useQuery({
        queryKey: ["chat-messages", 1], // ticketId = 1
        queryFn: async () => {
            const res = await axios.get(`/ticket/replay/create/1`);
            return res?.data?.messages || [];
        },
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false,
    });

    const sendMessageMutation = useMutation({
        mutationFn: async ({ message, file }) => {
            const formData = new FormData();
            formData.append("message", message);
            if (file) formData.append("file", file);

            const res = await axios.post(`/tickets/${ticketId}/reply`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return res.data;
        },
        onSuccess: () => {
            // ✅ Invalidate messages so they refetch
            queryClient.invalidateQueries(["chat-messages", ticketId]);
            setMessage("");
            setFile(null);
        },
        onError: () => {
            alert("Failed to send message.");
        },
    });


    const handleAttachmentClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSendMessage = () => {
        if (!message && !file) return; // nothing to send
        sendMessageMutation.mutate({ message, file });
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };
        return date.toLocaleString("en-US", options);
    }

    if (isLoading) return <p className="text-center mt-20">Loading chat...</p>;
    if (isError) return <p className="text-center mt-20 text-red-500">Failed to load chat.</p>;

    return (
        <div>
            <MobileHeader title="Live Chat" containerClassName="mb-6" />
            <Container className="flex flex-col py-0">
                {/* Chat Header */}
                <header className="bg-tertiary text-white p-4 rounded-t-2xl">
                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Logo className="w-10 h-10 text-primary" />
                            <h1 className="font-bold text-primary">Live Chat</h1>
                        </div>
                    </div>
                </header>

                {/* Chat Messages */}
                <main className="overflow-y-auto p-4 border-x-2 flex-1">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {messages.map((msg, idx) =>
                            msg.type !== "support" ? (
                                <div key={idx} className="flex items-start space-x-2">
                                    <Logo className="w-8 h-8 text-primary" />
                                    <div>
                                        <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-md max-w-md">
                                            <p>{msg.message}</p>
                                        </div>
                                        <span className="text-gray-500 text-xs mt-1">{formatDate(msg.created_at)}</span>
                                    </div>
                                </div>
                            ) : (
                                <div key={idx} className="flex items-start justify-end space-x-2">
                                    <div className="flex flex-col items-end">
                                        <div className="bg-tertiary text-primary rounded-lg rounded-tr-none p-3 shadow-md max-w-md mb-1">
                                            <p>{msg.message}</p>
                                        </div>
                                        <span className="text-gray-500 text-xs mt-1">{formatDate(msg.created_at)}</span>
                                    </div>
                                    <FallbackImage
                                        src={user?.image}
                                        alt={msg.sender?.name}
                                        className="w-8 h-8 rounded-full object-cover"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </main>

                {/* Chat Input */}
                <footer className="bg-tertiary p-4 rounded-b-2xl">
                    <div className="max-w-4xl mx-auto flex items-center space-x-2 lg:space-x-4">
                        <button className="text-gray-500 hover:text-gray-700 transition" type="button">
                            {/* Emoji SVG */}
                        </button>

                        <button
                            className="text-gray-500 hover:text-gray-700 transition"
                            type="button"
                            onClick={handleAttachmentClick}
                        >
                            <GrAttachment />
                        </button>

                        <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />

                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 p-2 border !border-secondary rounded-full focus:outline-none focus:!border-secondary"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <button
                            className="p-2 text-secondary transition border !border-secondary rounded-full"
                            type="button"
                            onClick={handleSendMessage}
                        >
                            <IoSendSharp className="w-6 h-6" />
                        </button>
                    </div>
                </footer>
            </Container>
        </div>
    );
}

