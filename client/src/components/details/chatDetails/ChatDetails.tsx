import React from "react";

interface ChatDetailsProps {
    className?: string;
}

const ChatDetails: React.FC<ChatDetailsProps> = ({ className }) => {
    return (
        <div className={`flex flex-col gap-3 mt-6 flex-1 ${className}`}>
            <div className="flex justify-between items-center py-4 hover:cursor-pointer">
                <p className="">Chat settings</p>
                <div className="bg-dark-grey-transperent p-2 rounded-full flex items-center">
                    <img className="h-3 w-3" src="/arrowUp.png" alt="iconUp" />
                </div>
            </div>
            <div className="flex justify-between items-center py-4 hover:cursor-pointer">
                <p className="">Shared photos</p>
                <div className="bg-dark-grey-transperent p-2 rounded-full flex items-center">
                    <img className="h-3 w-3" src="/arrowUp.png" alt="iconUp" />
                </div>
            </div>
            <div className="flex justify-between items-center py-4 hover:cursor-pointer">
                <p className="">Shared files</p>
                <div className="bg-dark-grey-transperent p-2 rounded-full flex items-center">
                    <img className="h-3 w-3" src="/arrowUp.png" alt="iconUp" />
                </div>
            </div>
        </div>
    );
};

export default ChatDetails;
