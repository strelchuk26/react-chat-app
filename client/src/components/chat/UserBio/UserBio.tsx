import React from "react";

interface UserBioProps {
    className?: string;
}

const UserBio: React.FC<UserBioProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <div className="px-6 py-6 flex justify-between">
                <div className="flex gap-4 items-center">
                    <img className="w-[70px] rounded-full" src="./avatar.png" alt="avatar" />
                    <div>
                        <h1 className="font-bold text-2xl">Username</h1>
                        <p className="text-[#d4d4d4]">User bio</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <img className="w-[20px] h-[20px]" src="./phone.png" alt="phone" />
                    <img className="w-[20px] h-[20px]" src="./video.png" alt="video" />
                    <img className="w-[20px] h-[20px]" src="./info.png" alt="info" />
                </div>
            </div>
        </div>
    );
};

export default UserBio;
