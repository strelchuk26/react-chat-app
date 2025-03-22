import React from "react";
import Login from "./Login";
import Register from "./Register";

interface AuthPageProps {
    className?: string;
}

const AuthPage: React.FC<AuthPageProps> = ({ className }) => {
    return (
        <div className={`w-full flex justify-between ${className}`}>
           <Login />
           <Register />
        </div>
    );
};

export default AuthPage;
