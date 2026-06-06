import React, { useState } from "react";
import heroImg from "./img/bg.png"

function Chatbox()
{
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleKeyDown = (e) => {
    if (e.key === "Enter" && message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };
    return(
        <>
            <div
            className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: `url(${heroImg})` }}
            >
            {/* فضای پیام‌ها */}
            <div className="chat-messages">
                {messages.map((msg, index) => (
                <div className="chat-box" key={index}>
                    {msg}
                </div>
                ))}
            </div>

            {/* input پایین صفحه */}
            <div className="p-4">
                <input
                type="text"
                placeholder="پیام خود را بنویس..."
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full p-3 rounded-lg border"
                />
            </div>
            </div>
        </>
    )
}
export default Chatbox;