import React from "react";

interface UserInfoProps {
    className?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <div className="flex flex-col items-center gap-4">
                <img className="w-28 h-28 rounded-full" src="/avatar.png" alt="avatar" />
                <p className="font-black text-2xl">Bohdan</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    );
};

export default UserInfo;
