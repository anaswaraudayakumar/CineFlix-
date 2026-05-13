import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollToTop() {
  return (
    <div className='fixed bottom-6 right-6 z-40'>
      <button type='button' className='bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full shadow-lg transition-all duration-all duration-200 focus:outline  '>
        <FaArrowUp/>
        </button>
    </div>
  )
}

export default ScrollToTop