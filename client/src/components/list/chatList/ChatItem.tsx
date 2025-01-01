import React from "react";

interface ChatItemProps {
    className?: string;
}

const ChatItem: React.FC<ChatItemProps> = ({ className }) => {
    return (
        <div className={`transition duration-150 ease-in-out hover:bg-dark-grey-transperent py-3 ${className}`}>
            <div className="flex px-6">
                <img className="w-[50px] h-[50px] rounded-full" src="./avatar.png" alt="avatar" />
                <div className="flex-1 ml-3">
                    <div className="flex justify-between">
                        <h1 className="flex-1 font-bold mb-1">Username</h1>
                        <p>Tue</p>
                    </div>
                    <p>Hello!</p>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;
