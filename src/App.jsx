import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './Home/components/Hero'
import './App.css'

import Navbar from './components/Navbar'
import About from './components/About'
import Ourservices from './components/Ourservices'
import Ourcoresrv from './Home/components/Ourcoresrv'
import Partnership from './Home/components/Partnership'
import Testomonial from './Home/components/Testomonial'
import PetrongPacioli from './Home/components/PetrongPacioli'
import OurPromise from './Home/components/OurPromise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Hero />
        <Ourcoresrv/>
        <Partnership/>
        <Testomonial/>
        <PetrongPacioli/>
        <OurPromise/>
      {/*   <Navbar/>
        <About/>
        <Ourservices/> */}
      </div>
    </>
  )
}

export default App
