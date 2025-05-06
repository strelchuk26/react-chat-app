import React from "react";
import UserInfo from "./userInfo/UserInfo";
import SearchBar from "./chatList/SearchBar";
import ChatList from "./chatList/ChatList";

interface ListProps {
    className?: string;
    user?: any;
}

const List: React.FC<ListProps> = ({ className, user }) => {
    return (
        <div className={`flex h-full flex-col ${className}`}>
            <UserInfo avatarUrl={user?.photoURL} displayName={user?.displayName} className="px-6 pt-6" />
            <SearchBar className="mt-5 px-6" />
            <ChatList className="flex-1 mt-5" />
        </div>
    );
};

export default List;
