import React, { useState } from "react";
import List from "./list/List";
import Chat from "./chat/Chat";
import Details from "./details/Details";
import LoginPage from "./login/LoginPage";

const Container: React.FC = () => {
    const [user, setUser] = useState(false);

    return (
        <>
            <div
                style={{
                    backgroundImage: "url('/bg.jpg')",
                    backgroundSize: "cover",
                    filter: "hue-rotate(90deg)",
                    height: "100vh",
                    width: "100vw",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                }}
            ></div>
            {user ? (
                <div className="w-[90vw] h-[90vh] bg-dark-grey-transperent rounded-[30px] flex backdrop-brightness-[140%] backdrop-blur-lg">
                    <List className="flex-1" />
                    <Chat className="flex-2" />
                    <Details className="flex-1" />
                </div>
            ) : (
                <div className="w-[60vw] h-[70vh] bg-dark-grey-transperent rounded-[30px] flex backdrop-brightness-[140%] backdrop-blur-lg">
                    <LoginPage />
                </div>
            )}
        </>
    );
};

export default Container;
