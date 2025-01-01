import React, { useState } from "react";
import ChatItem from "./ChatItem";

interface ChatListProps {
    className?: string;
}

const ChatList: React.FC<ChatListProps> = ({ className }) => {
    const [chats, setChats] = useState([]);

    return (    
        <div className={`custom-scrollbar overflow-y-auto ${className}`}>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
        </div>
    );
};

export default ChatList;
