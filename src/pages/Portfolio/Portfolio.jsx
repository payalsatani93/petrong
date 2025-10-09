import React from 'react'
import Herosection from './Herosection'
import Mobileapplication from './Mobileapplication'
import FeatureSection from './Featuresection'
import Navbar from '../About/Navbar'


export default function Portfolio() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Mobileapplication/>
      <FeatureSection/>

    </div>
  )
}
