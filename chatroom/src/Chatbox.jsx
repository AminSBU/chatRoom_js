import React from "react";
import heroImg from "./img/bg.png"

function Chatbox()
{
    return(
        <>
            <div
            className="w-full h-full bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: `url(${heroImg})` }}
            >
            {/* فضای پیام‌ها */}
            <div className="flex-1 p-4 text-white">
                <h1>Chatbox</h1>
            </div>

            {/* input پایین صفحه */}
            <div className="p-4">
                <input
                type="text"
                placeholder="پیام خود را بنویس..."
                className="w-full p-3 rounded-lg border"
                />
            </div>
            </div>
        </>
    )
}
export default Chatbox;