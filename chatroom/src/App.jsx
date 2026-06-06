import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="parent">
        <div class="div1">1</div>
        <div class="div2">2</div>
      </div>
    </>
  )
}

export default App
