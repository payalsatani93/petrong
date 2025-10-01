import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './Home/components/Hero'
import './App.css'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Hero />
      </div>
    </>
  )
}

export default App
