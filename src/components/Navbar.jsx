import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useMovies } from '../context/MoviesContext';

function Navbar() {

 const [isMenuClick,setIsMenuClick] = useState(false)

 const [searchQuery,setSearchQuery]= useState("")
 const [searchResult,setSearchResult]= useState([])
 const [isSearching,setIsSearching]= useState(false)
 const [showSearchResult,setShowSearchResult]= useState(false)
 const searchContainerRef = useRef(null)

  
  return (
    <header className="flex w-full z-50 transition-all duration-300">
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center' >
            <a href="/" className='flex items-center'>
              <span className='text-blue-400 font-bold text-3xl'>
                Cine<span className='text-white'>Flix</span></span>
            </a>
          </div>
          {/*Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <a href="#" className='text-white hover:text-blue-400 transition-all font-medium'>
              Home
            </a>
            <a href="#trending" className='text-white hover:text-blue-400 transition-all font-medium'>
              Trending
            </a>
            <a href="#popular" className='text-white hover:text-blue-400 transition-all font-medium'>
              Popular
            </a>
            <a href="#top-rated" className='text-white hover:text-blue-400 transition-all font-medium'>
              Top Rated
            </a>
          </nav>
          {/* Desktop Search */}
          <div className=' block relative search-container ' ref={searchContainerRef}>
            <div className='relative '>
              <input type="text" placeholder='Search Movies' className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-34 md:w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50' />
              {/* conditional rendering */}
             { isSearching?
              (<div className='absolute right-3 top-2.5'>
                <AiOutlineLoading3Quarters
                  className='w-4 h-4 text-neutral-400 animate-spin'
                />
              </div>)
              :
              
              (<div className='absolute right-3 top-3'>
                <CiSearch
                  className='w-4 h-4 text-neutral-400'
                />
              </div>)}

            </div>
            {/* search result conditional rendering */}
           {showSearchResult && searchResult && searchResult.length>0 && 
           (<div className="absolute mt-2  w-full md:w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
              <ul className='divide-y divide-neutral-700'>
                <li className='hover:bg-neutral-700'>
                  <button className='flex items-center p-3 w-full text-left'>
                    <div className='w-10 h-10 bg-neutral-700 rounded overflow-hidden  shrink-0'>
                      {/* conditional rendering */}
                      <img src="/" alt="" className='w-full h-full object-cover' />
                      {/* else  */}
                      <div className='w-full h-full flex items-center justify-center text-neutral-500 text-xs'>
                        {/*  */}
                        No Image
                      </div>
                    </div>
                    <div className='ml-3 flex-1'>
                      <p className='text-sm font-medium text-white truncate'>
                        Movie Title
                      </p>
                      <p className='text-xs text-neutral-400'>
                        Movies Release Date
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>)
            }
            {/* Conditional Rendering */}
           { showSearchResult && searchQuery.trim().length>2 && (!searchResult || searchResult.length ===0) && !isSearching &&
            (<div className='absolute mt-2 w-full md:w-70 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50'>
              <div className='p-4 text-center overflow-hidden text-neutral-400 text-sm'>
                No movies found matching.....
              </div>
            </div>)
            }
          </div>
          {/* Mobile Menu Button */}
          <button onClick={()=>setIsMenuClick(!isMenuClick)} className='md:hidden text-white '>
            {/* conditional rendering */}
         {  isMenuClick? <HiOutlineX className="h-6 w-6" />
            :
            <HiOutlineMenu className="h-6 w-6" />}

          </button>
        </div>
        {/* mobile navigation conditional rendering  */}
       { isMenuClick&&<div className='mt-4 pb-4 space-y-4 md:hidden'>
          <a href="#" className='block text-white hover:text-blue-400 transition-colors py-2 font-medium '>
            Home
          </a>
          <a href="#trending" className='block text-white hover:text-blue-400 transition-colors py-2 font-medium'>
            Trending
          </a>
          <a href="#popular" className='block text-white hover:text-blue-400 transition-colors py-2 font-medium'>
            Popular
          </a>
          <a href="#top-rated" className='text-white hover:text-blue-400 transition-all font-medium'>
            Top Rated
          </a>
          

        </div>}
      </div>
    </header>
  )
}

export default Navbar