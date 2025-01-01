import React from "react";
import UserBio from "./UserBio/UserBio";
import MessageInput from "./MessageInput/MessageInput";
import MessageHistory from "./MessageHistory/MessageHistory";

interface ChatProps {
    className?: string;
}

const Chat: React.FC<ChatProps> = ({ className }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <UserBio />
            <MessageHistory/>
            <MessageInput/>
        </div>
    );
};

export default Chat;
