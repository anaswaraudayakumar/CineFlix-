import React, { useEffect, useState } from 'react'
import { HiPlayCircle } from "react-icons/hi2";
import { HiStar } from 'react-icons/hi2';
import { useMovies } from '../context/MoviesContext';
import { getMoviesByGenreAPI } from '../api/allApi';
function GenreSection() {
    const { genres, loading, openMoviesDetails} = useMovies();
    const [selectGenre,setSelectGenre] = useState(null)
    const [genreList,setGenreList] = useState([])
    const [loadingGenre,setLoadingGenre] = useState([])

    useEffect(()=>{
        if(!loading && genres.length>0){
            setSelectedGenre(genres[0])
        }
    },[loading,genres])
    useEffect(()=>{
        const loadingGenre = async()=>{
            if(!selectGenre) return
            setLoadingGenre(true)
            const Movies = await getMoviesByGenreAPI(selectGenre.id)
            setGenreList(Movies.slice(0,8))
            setLoadingGenre(false)
        }
        loadingGenre()
    },[selectGenre])
    if ( loading || selectGenre)
   {
     return (
        <section className='py-12 bg-neutrl-900/50 ' id=''>
            <div className='container mx-auto px-4'>
                <h2 className='text-2xl md:text-3xl fond-bold text-white mb-6'>
                    Browse by Genre
                </h2>
                {/* Genre Tabs */}
                <div className='mb-8 overflow-x-auto pb-2'>
                    <div className='flex space-x-2 min-w-max'>
                        {/* conditional rendering */}
                        <button
                            className='px-4 py-2 rounded-md transition-colors text-sm ' >
                            Genre Name
                        </button>
                    </div>
                </div>
                {/* Conditional rendering */}
                <div className='h-64 flex items-center justify-center'>
                    <div className='animate-pulse'>
                        <div className='w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>

                    </div>
                </div>
                {/* Else */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-6 '>
                    {/* map method */}
                    <div className='group relative cursor-pointer'>
                        <div className='relative rounded-lg overflow-hidden bg-neutral-800'>
                            {/* 1. Image Container with Aspect Ratio */}
                            <div className='aspect-[2/3] relative'>
                                <img
                                    src="/"
                                    alt="Movie Poster"
                                    className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35'
                                />

                                {/* 2. THE OVERLAY (Everything goes INSIDE here) */}
                                <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 space-y-3'>

                                    {/* Rating and Date Row */}
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center space-x-1'>
                                            <HiStar className="h-3 w-3 text-yellow-400" />
                                            <span className="text-yellow-400 text-xs font-medium">8.5</span>
                                        </div>
                                        <span className='text-neutral-300 text-xs'>2024</span>
                                    </div>

                                    {/* Play Button */}
                                    <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex items-center justify-center gap-1 transition-all text-sm font-semibold'>
                                        <HiPlayCircle className='h-4 w-4' />
                                        Watch Now
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-white text-sm font-medium truncate  '> Movie Title</h3>
                        <div className='flex items-center justify-between' >
                            <div className='flex items-center space-x-1'>
                                <HiStar className="h-3 w-3 text-yellow-400" />
                                <span className='text-neutral-400 text-xs'>
                                 Movie Average Rating
                                </span>

                            </div>
                            <span className='text-neutral-500 text-xs'> Movie Release Date</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
    }
}

export default GenreSection