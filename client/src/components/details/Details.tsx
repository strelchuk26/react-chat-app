import React from "react";
import UserInfo from "./userInfo/UserInfo";
import ChatDetails from "./chatDetails/chatDetails";
import BlockUserButton from "./BlockUserButton";

interface DetailsProps {
    className?: string;
}

const Details: React.FC<DetailsProps> = ({ className }) => {
    return (
        <div className={`px-6 py-6 flex flex-col ${className}`}>
            <UserInfo />
            <ChatDetails />
            <BlockUserButton />
        </div>
    );
};

export default Details;
