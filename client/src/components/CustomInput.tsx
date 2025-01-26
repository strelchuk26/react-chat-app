import React, { useState } from "react";

interface CustomInputProps {
    className?: string;
    placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ className, placeholder }) => {
    return (
        <div>
            <div className={`${className} p-3 gap-2 flex-1 bg-dark-grey-transperent flex items-center rounded-xl`}>
                <input
                    style={{ backgroundColor: "transparent", }}
                    className="flex-1 border-none outline-none text-white placeholder-gray-400"
                    type="text"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default CustomInput;
