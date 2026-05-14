import React, { useEffect, useState } from 'react'
import { IoMdStar } from "react-icons/io";
import { HiPlay } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";
import { useMovies } from '../context/MoviesContext';
import { getImageURL } from '../api/allApi';

function HeroSection() {
    const {trendingMovies,loading} = useMovies()
    const [currentSlide,setCurrentSlide] = useState(0)
    const [isTransitioning,setIsTransitioning] = useState(false)
    
    const featureMovies = trendingMovies.slice(0,5)
    useEffect(()=>{
        if(loading || featureMovies.length ===0) return

        const interval = setInterval(()=>{
            setIsTransitioning(true)
            setTimeout(()=>{
                setCurrentSlide((prev)=>(prev+1) % featureMovies.length)
                setIsTransitioning(false)
            },500)
        },8000)
        return ()=> clearInterval(interval)
    },[loading,featureMovies.length])
    if (loading|| featureMovies.length===0){
        return(
            <div className='relative w-full   h-screen flex items-center justify-center bg-neutral-900'>
                <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className='mt-4 text-neutral-400'>Loading Movies.....</p>
                </div>

            </div>
        )
        
        }
         const currentMovie = featureMovies[currentSlide]
        const formRating = (rating)=>{
            return (Math.round(rating*10)/10).toFixed(1)
    }
    return (
        <div className='relative w-full h-screen '>
            {/* movies backdrop */}
            <div className={`absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-700 ${isTransitioning ? "opacity-0":"opacity-100"} `} style={{backgroundImage: `url(${getImageURL(currentMovie.backdrop_path)})`}}>
                {/* gradient overlay */}
                <div className='absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20 '>
                    <div className='absolute inset-0 bg-linear-to-r from-neutral-900 to-transparent'></div>
                </div>
                {/* content  */}
                <div className='absolute inset-0 flex items-center z-10 container mx-auto px-4'>
                    <div className='max-w-3xl'>
                        {/* movies info */}
                        <div className={`transition-all duration-700 ${isTransitioning ? "opacity-0":"opacity-100"} `}>
                            <div className='flex items-center space-x-3 mb-4'>
                                <span className='bg-blue-600/90 text-white text-xs font-semibold px-2 py-1 rounded-sm'>
                                    FEATURED
                                </span>
                                {/* conditional Rendering */}
                                {currentMovie.vote_average > 0 &&
                                (<div className='flex items-center'>
                                    <IoMdStar className='h-5 w-5 text-yellow-500' />
                                    <span>{formRating(currentMovie.vote_average)}</span>
                                </div>)}
                                
                                {/* Conditional Rendering  */}
                                <span className='text-neutral-400'>.</span>
                                <span className='text-neutral-300 text-sm'>{currentMovie.release_date?.substring(0,4)|| "N/A"}</span>
                                {/* conditional rendering */}
                               { 
                               currentMovie.adult &&
                               ( <>
                                    <span className='text-neutral-400'>.</span>
                                    <span className='bg-neutral-700 text-neutral-300 text-xs px-11.5 py-0.5'>18+</span>
                                </>)}
                                {/* Conditional Rendering close */}

                            </div>
                        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>{currentMovie.title}</h1>
                        <p className='text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl'>
                           {currentMovie.overview}
                            </p>
                            <div className='flex flex-wrap gap-4'>
                              <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all'>
                                <HiPlay className='h-5 w-5'/>
                                Watch Now
                                </button>  
                                <button className='bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 flex items-center gap-2 transition-all border border-neutral-600'>
                                    <HiPlus className='h-5 w-5'/>
                                    Add to watchList
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* pagination */}
                <div className='absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10'>
  {
    featureMovies.map((_, index) => {
      return (
        <button
          key={index}
          onClick={() => {
            setIsTransitioning(true)

            setTimeout(() => {
              setCurrentSlide(index)
              setIsTransitioning(false)
            }, 500)
          }}
          className={`h-1.5 rounded-full transition-all ${
            currentSlide === index
              ? "w-8 bg-blue-500"
              : "w-4 bg-neutral-600/50"
          }`}
        ></button>
      )
    })
  }
</div>

            </div>

        </div>
    )
}

export default HeroSection