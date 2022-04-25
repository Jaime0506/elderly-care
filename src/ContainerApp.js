import React, { useState } from 'react'

import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import FirstPage from './pages/FirstPage/FirstPage'
import SecondPage from './pages/SecondPage/SecondPage'
import ThirdPage from './pages/ThirdPage/ThirdPage'
import FourthPage from './pages/FourthPage/FourthPage'
import Footer from './components/Footer/Footer'

import './App.css'

export default function App() {

  const [isVisible, setIsVisible] = useState(false)

  const toggleSlide = () => {
    setIsVisible(!isVisible)
  }

  return (
    <section className='container-app'>
      <Menu isVisible={isVisible} toggleSlide={toggleSlide} />
      <Header toggleSlide={toggleSlide} />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </section>
  )
}
