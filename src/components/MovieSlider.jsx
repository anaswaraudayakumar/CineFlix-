import React, { useRef, useState } from 'react'
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";
import { getImageURL } from '../api/allApi';
import { useMovies } from '../context/MoviesContext';


function MovieSlider({title,subtitle,movies=""}) {
    const slideRef = useRef(null)
    const [isScrolling,setIsScrolling] = useState(false)
    const [hoveredMovieId,setHoveredMovieId] = useState(null)
    const {openMoviesDetails} = useMovies();

    const scroll = (direction)=>{
        if(isScrolling) return
            setIsScrolling(true)
            const{current} = slideRef
            const scrollAmount = 
            direction === "left" ? -current.clientWidth * 0.75: current.clientWidth *0.75
        
    current.scrollBy({
        left:scrollAmount,
        behavior: "smooth"
    })       
    setTimeout(() => {
        setIsScrolling(false)
    }, 500); 
    }
    const formatRating =(rating)=>{
        return (Math.round(rating *10)/10).toFixed(1)
    }
    const handleMovieClick = (movieId)=>{
        openMoviesDetails(movieId)
    }

    return (
        <section className='py-12' id="">
            <div className='container mx-auto px-4'>
                <div className='flex items-baseline justify-between mb-8'>
                    <div className='text-2xl md:text-3xl font-bold text-white'>
                        <h2>{title}</h2>
                        {/* Conditional Rendering */}
                        <p className='text-neutral-400 text-sm mt-1'>{subtitle}</p>
                    </div>
                    <div className='flex space-x-2'>
                        <button className='p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-white transition-all'
                            aria-label='Scroll left' onClick={()=>scroll("left")}>
                            <HiOutlineChevronLeft className="h-5 w-5" />

                        </button>
                        <button className='p-2 rounded-full bg-neutral-800/70  hover:bg-neutral-700 text-white transition-all'
                            aria-label='Scroll right'
                            onClick={()=>scroll("right")}>
                            <HiOutlineChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                </div>

                {/* movie slider */}
                <div className='relative'>
                    <div className='flex space-x-4 overflow-x-hidden scrollbar-hide bb-4 snap-x'
                     ref={slideRef} style={{scrollbarWidth:"none", msOverflowStyle:"none"}}>
                        {/* conditional rendering */}
                      {
                        movies.map((movie)=>{
                            return(
                                  <div className='min-w-50 md:min-w-60 snap-start relative group cursor-pointer '
                                  key={movie.id} onMouseEnter={()=>setHoveredMovieId(movie.id)} onMouseLeave={()=>setHoveredMovieId(null)} onClick={()=>handleMovieClick(movie.id)}>
                            <div className='rounded-lg overflow-hidden bg-neutral-800 '>
                                <div className='relative aspect-2/3'>
                                    <img src={getImageURL(movie.poster_path,"w500")} alt={movie.title} className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35' />
                                    {/* hover overlay */}
                                    <div className='absolute inset-0 bg-linear-to-t from-neutral-900/90 via-neutral-900/40 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                        <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3 '>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center space-x-1 '>
                                                    <HiStar className="h-4 w-4 text-yellow-400" />
                                                    <span className='text-yellow-400 text-sm font-medium'>{formatRating(movie.vote_average)}</span>
                                                </div>
                                                <span className='text-neutral-400 text-sm'>
                                                   {movie.release_date?.substring(0,4) || "N/A"}
                                                </span>
                                            </div>
                                            <button className='w-full h-10 bg-blue-600 hover:bg-blue-700 text-whitepy-3 rounded-md flex items-center justify-center gap-1 transition-all text-sm '>
                                                <HiInformationCircle className="h-4 w-4" />
                                                View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Movies Info */}
                            <div className='mt-3'>
                                <h3 className='text-white text-sm font-medium truncate'>
                                   {movie.title}
                                </h3>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-1'>
                                        <HiStar className="h-3 w-3 text-yellow-500" />
                                        <span className="text-neutral-400 text-xs">{formatRating(movie.vote_average)}</span>
                                    </div>
                                    <span className="text-neutral-500 text-xs"> {movie.release_date?.substring(0,4) || "N/A"}</span>
                                </div>
                            </div>
                        </div>
                            )
                        })
                      }

                    </div>
                </div>
            </div>

        </section>
    )
}

export default MovieSlider