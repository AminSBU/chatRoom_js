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
      <div className="parent">
        <div className="div1"><Chatbox /></div>
        <div className="div2"><Sidebox /></div>
      </div>
    </>
  )
}

export default App
