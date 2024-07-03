import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
     <div className='w-full min-h-screen  bg-zinc-900'>
         <Navbar/>
         <Landing/>
         <Marquee/>
         <About/>
         <Eyes/>
         <Feature/>
         <Cards/>
         <Footer/>
      </div>
    </>
  )
}

export default App
