import React from "react";

interface UserInfoProps {
    className?: string;
    avatarUrl?: string;
    displayName?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ className, avatarUrl, displayName }) => {
    return (
        <div className={className}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-full" src={avatarUrl || "/avatar.png"} alt="avatar" />
                    <p className="font-black text-2xl">{displayName || "user"}</p>
                </div>
                <div className="flex gap-4">
                    <img className="size-5" src="/more.png" alt="" />
                    <img className="size-5" src="/video.png" alt="" />
                    <img className="size-5 invert" src="/edit.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
