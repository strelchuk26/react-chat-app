import React from "react";

interface CustomButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    isSubmitting?: boolean;
    variant?: "primary" | "secondary" | "danger";
}

const CustomButton: React.FC<CustomButtonProps> = ({ className, text, onClick, disabled = false, variant = "primary", isSubmitting = false, }) => {
    const disabledStyles = "bg-gray-300 text-gray-600 cursor-not-allowed";
    const baseStyles = "px-5 py-2 rounded-xl text-white font-semibold transition-all duration-300";
    const variantStyles = {
        primary: "bg-blue-500 hover:bg-blue-600",
        secondary: "bg-gray-500 hover:bg-gray-600",
        danger: "bg-red-500 hover:bg-red-600",
    };

    return (
        <button type={isSubmitting ? "submit" : "button"} className={`${baseStyles} ${disabled ? disabledStyles : variantStyles[variant]} ${className}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default CustomButton;
