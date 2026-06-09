import { useState } from "react";
import "./App.css";
import Sidebox from "./Sidebox.jsx";
import Chatbox from "./Chatbox.jsx";

function App() {
  const [chatBoxBg, setChatBoxBg] = useState("bg-gray-100");

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-2 h-screen">
      <div className="col-span-4 row-span-5">
        <Chatbox chatBoxBg={chatBoxBg} />
      </div>

      <div className="col-start-5 row-span-5">
        <Sidebox setChatBoxBg={setChatBoxBg} />
      </div>
    </div>
  );
}

export default App;
