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

import Servicescard from './components/Servicescard'
import Ourvalue from './components/Ourvalue'
import Ourteams from './components/Ourteams'
import Nextlevel from './components/Nextlevel'
import Footer from './components/Footer'
import Herosection from './Portfolio/components/Herosection'
import Expertise from './My compoments/Expertise.jsx'

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
        <Navbar/>
        <About/>
        <Ourservices/>
        <Navbar/>
      
        <Ourservices/>
        <Servicescard/>
        <Ourvalue/>
        <Ourteams/>
        <Nextlevel/>
        <Footer/>
        {/* portfolio */}

        <Herosection/>
        <Navbar/>
      
   
        
        <Expertise/>

      </div>
    </>
  )
}

export default App
