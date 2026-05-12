import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MoviesContent from './components/MoviesContent'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar/>
      <main><MoviesContent/></main>
      <Footer/>
    </div>
  )
}

export default App
