import React from "react";

function Sidebox({ setChatBoxBg }) {
  return (
    <div className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-400">
      <button onClick={() => setChatBoxBg("bg-red-100")}>
        send
      </button>
    </div>
  );
}

export default Sidebox;
