import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io(`http://${window.location.hostname}:3001`); /* system IP: find with ipconfig in cmd */

function Chatbox({ chatBoxBg }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  /* function to send message */
  const sendMessage = () => {
    /* check message not empty */
    if (message.trim() !== "") {
      /* send message with event:send_message */
      socket.emit("send_message", message); 
      /* send empty after send message */
      setMessage("");
    }
  };

  /* for receive message from server */
  useEffect(() => {
    /* hear the receiver for get data */
    socket.on("receive_message", (data) => {
      /* save receive data into message */
      setMessages((prev) => [...prev, data]);
    });
  }, []);

  return (
    /* main container */
    <div className={`flex flex-col h-screen p-6 ${chatBoxBg}`}>
      {/* messages container */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4"> 
        {/* send messages into array with index */}
        {messages.map((msg, index) => (
          /* messages sytle */
          <div
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl w-fit max-w-[70%]"
          >
            {msg}
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>
        {/* input container */}
      <div className="flex gap-2">
        {/* input options (type, className, value and onChange function) */}
        <input
          type="text"
          className="border rounded-xl p-3 flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* button to send */}
        <button
          onClick={sendMessage}
          className="bg-purple-500 text-white px-4 rounded-xl"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
