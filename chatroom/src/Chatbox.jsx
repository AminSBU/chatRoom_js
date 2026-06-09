import { useState, useRef, useEffect } from "react";

function Chatbox({ chatBoxBg }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && message.trim() !== "") {
      setMessages((prev) => [...prev, message]);
      setMessage("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={`flex flex-col h-screen p-6 ${chatBoxBg}`}>
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl w-fit max-w-[70%]"
          >
            {msg}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <input
        type="text"
        className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-purple-400"
        placeholder="پیام ......."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Chatbox;
