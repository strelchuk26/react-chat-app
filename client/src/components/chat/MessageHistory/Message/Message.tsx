import React from "react";

export interface MessageProps {
    className?: string;
    text: string;
    isOwnMessage?: boolean;
}

const Message: React.FC<MessageProps> = ({ className, isOwnMessage, text }) => {
    return (
        <div className={`m-3 flex ${isOwnMessage ? "justify-end" : ""} ${className}`}>
            {!isOwnMessage && <img className="w-[50px] h-[50px] mr-2 self-end rounded-full" src="./avatar.png" alt="avatar" />}
            <div
                className={`p-[10px] max-w-[70%] flex flex-col rounded-tr-xl rounded-br-xl rounded-tl-xl ${
                    isOwnMessage ? "bg-dark-purple-transparent text-white rounded-bl-xl" : "bg-dark-grey-transperent text-black rounded-tl-xl"
                }`}
            >
                {!isOwnMessage && <p className="font-bold text-[18px]">user</p>}
                <div className="flex mt-1 gap-3 items-end">
                    <p>
                       {text}
                       {/* <img className="rounded-xl" src="https://picsum.photos/400/500" alt="" /> */}
                    </p>
                    <p className="text-[12px] font-bold">15:30</p>
                </div>
            </div>
        </div>
    );
};

export default Message;
