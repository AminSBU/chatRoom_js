import React from "react";
import heroImg from "./img/bg.png"

function Chatbox()
{
    return(
        <>
            <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImg})` }}
                >
                <p1>Chatbox</p1>
            </div>
        </>
    )
}
export default Chatbox;