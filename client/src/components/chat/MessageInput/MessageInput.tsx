import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

interface MessageInputProps {
    className?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ className }) => {
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
    const [text, setText] = useState("");

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setEmojiPickerOpen(false);
    };

    return (
        <div className={`px-6 py-6 ${className}`}>
            <div className="flex items-center gap-3">
                <div className="flex gap-4">
                    <img className="w-[20px] h-[20px]" src="./img.png" alt="imageIcon" />
                    <img className="w-[20px] h-[20px]" src="./camera.png" alt="cameraIcon" />
                    <img className="w-[20px] h-[20px]" src="./mic.png" alt="microphoneIcon" />
                </div>
                <div className="p-2 gap-2 flex-1 bg-dark-grey-transperent flex items-center rounded-xl">
                    <input
                        style={{ backgroundColor: "transparent" }}
                        className="flex-1 border-none outline-none text-white placeholder-white"
                        type="text"
                        placeholder="Write a message..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <img onClick={() => setEmojiPickerOpen((prev) => !prev)} className="w-[20px] h-[20px]" src="./emoji.png" alt="emojiIcon" />
                    <div className="absolute bottom-[50px] left-0">
                        <EmojiPicker onEmojiClick={handleEmoji} open={emojiPickerOpen} />
                    </div>
                </div>
                <button className="hover:bg-[#426acf] rounded-2xl py-[10px] px-[20px] bg-[#5183fe] text-white">Send</button>
            </div>
        </div>
    );
};

export default MessageInput;
