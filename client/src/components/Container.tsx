import React from "react";
import List from "./list/List";
import Chat from "./chat/Chat";
import Details from "./details/Details";

const Container: React.FC = () => {
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
            <div className="w-[90vw] h-[90vh] bg-dark-grey-transperent rounded-[30px] flex backdrop-brightness-[140%] backdrop-blur-lg">
                <List className="flex-1" />
                <Chat className="flex-2" />
                <Details className="flex-1" />
            </div>
        </>
    );
};

export default Container;
