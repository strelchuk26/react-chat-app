import React from "react";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";

interface LoginPageProps {
    className?: string;
}

const LoginPage: React.FC<LoginPageProps> = ({ className }) => {
    return (
        <div className={`w-full flex justify-between ${className}`}>
            <div className="flex-1 gap-4 flex flex-col justify-center items-center">
                <h1 className="font-bold text-[25px]">Welcome back!</h1>
                <CustomInput placeholder="Email" />
                <CustomInput placeholder="Password" />
                <CustomButton variant="primary" text="Sign in" />
            </div>
            <div className="flex-1 gap-4 flex flex-col justify-center items-center">
                <h1 className="font-bold text-[25px]">Create an account</h1>
                <div className="flex items-center gap-8">
                  <img className="w-16 h-16" src="./avatar.png" alt="avatar" />
                  <p>Upload an image</p>
                </div>
                <CustomInput placeholder="Username" />
                <CustomInput placeholder="Email" />
                <CustomInput placeholder="Password" />
                <CustomButton variant="primary" text="Sing up" />
            </div>
        </div>
    );
};

export default LoginPage;
