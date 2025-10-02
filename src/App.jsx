import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './Home/components/Hero'
import './App.css'

import Navbar from './components/Navbar'
import About from './components/About'
import Ourservices from './components/Ourservices'
import Servicescard from './components/Servicescard'
import Ourvalue from './components/Ourvalue'
import Ourteams from './components/Ourteams'
import Nextlevel from './components/Nextlevel'
import Footer from './components/Footer'
import Herosection from './Portfolio/components/Herosection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        {/* <Hero /> */}
        <Navbar/>
        {/* <About/>
        <Ourservices/>
        <Servicescard/>
        <Ourvalue/>
        <Ourteams/>
        <Nextlevel/>
        <Footer/> */}


        {/* portfolio */}

        <Herosection/>
      </div>
    </>
  )
}

export default App
