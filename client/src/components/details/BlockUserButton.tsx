import React from "react";

interface BlockUserButtonProps {
    className?: string;
}

const BlockUserButton: React.FC<BlockUserButtonProps> = ({ className }) => {
    return (
        <div className={`flex justify-center mt-6 ${className}`}>
            <button className="hover:opacity-75 bg-dark-grey-transperent p-3 rounded-xl" type="button">
                Block User
            </button>
        </div>
    );
};

export default BlockUserButton;
