import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MoviesContent from './components/MoviesContent'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { MoviesProvider } from './context/MoviesContext'


function App() {
  

  return (
    <MoviesProvider>
      <div className='min-h-screen bg-black text-white'>
        <Navbar/>
        <main><MoviesContent/></main>
        <Footer/>
        <ScrollToTop/>
      </div>
    </MoviesProvider>
  )
}

export default App
