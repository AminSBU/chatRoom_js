import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sidebox from "./Sidebox.jsx"
import Chatbox from "./Chatbox.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-2 h-screen">
        <div className="col-span-4 row-span-5">
          <Chatbox />
        </div>

        <div className="col-start-5 row-span-5">
          <Sidebox />
        </div>
      </div>
    </>
  )
}

export default App
