import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Info from './Components/Info/Info'
import Slider from './Components/Slider/Slider'
import Section from './Components/Section/Section'
import Iframe from './Components/Iframe/Iframe'
import Sell from './Components/Sell/Sell'
import Main from './Components/Main/Main'
import Accordions from './Components/Accordions/Accordions'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Info/>
      <Slider/>
      <Section/>
      <Iframe/>
      <Sell/>
      <Main/>
      <Accordions/>
      <Footer/>
    </div>
  )
}

export default App