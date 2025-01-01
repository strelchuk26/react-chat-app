import React, { useEffect, useRef, useState } from "react";
import Message, { MessageProps } from "./Message/Message";

interface MessageHistoryProps {
    className?: string;
}

const MessageHistory: React.FC<MessageHistoryProps> = ({ className }) => {
    const endRef = useRef<null | HTMLDivElement>(null);
    const [messages, setMessages] = useState<MessageProps[]>([]);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth"});
    }, [])

    return (
        <div className={`custom-scrollbar overflow-scroll px-6 pb-4 flex flex-col flex-1 ${className}`}>
            <Message text={"hello"} isOwnMessage/>
            <Message text={"hello"}/>
            <Message text={"how are you?"} isOwnMessage/>
            <div ref={endRef}></div>
        </div>
    );
};

export default MessageHistory;
