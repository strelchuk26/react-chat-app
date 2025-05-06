import React, { useEffect, useState } from "react";
import List from "./list/List";
import Chat from "./chat/Chat";
import Details from "./details/Details";
import AuthPage from "./AuthPage/AuthPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Container: React.FC = () => {
    const [user, setUser] = useState<null | any>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

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
                    <List user={user} className="flex-1" />
                    <Chat className="flex-2" />
                    <Details className="flex-1" />
                </div>
            ) : (
                <div className="w-[60vw] h-[70vh] bg-dark-grey-transperent rounded-[30px] flex backdrop-brightness-[140%] backdrop-blur-lg">
                    <AuthPage />
                </div>
            )}
        </>
    );
};

export default Container;
