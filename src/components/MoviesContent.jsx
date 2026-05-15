import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MoviesDetails from './MoviesDetails'
import { useMovies } from '../context/MoviesContext'
import { FaExclamation } from "react-icons/fa";
function MoviesContent() {
  const {trendingMovies,popularMovies,topRatedMovies,selectedMovieId,closeMovieDetails,error} = useMovies()
  if(error){
    return(
      <div className='min-h-screen flex items-center justify-center bg-neutral-900 text-white'>
        <div className='text-center'>
          <FaExclamation className='h-16 w-16 mx-auto text-red-500'/>
          <h2 className='text-2xl font-bold mt-4'>Error in loading Movies </h2>
          <p className='text-neutral-400'>{error}</p>


        </div>
      </div>
    )
  }
  return (
    <div>
        <HeroSection/>
        <div className='bg-linear-to-b from-neutral-900 to-neutral-950'>
            <MovieSlider title="Trending Movies This Week" subtitle="Stay Updated with what everyone's watching" movies={trendingMovies} id="trending"/>
            <MovieSlider title="Popular Movies" subtitle="Most Watched Movies"  movies={popularMovies} id="popular"/>

            <GenreSection/>
            <MovieSlider title="Top Rated Movies" subtitle="All time Highest Rated"  movies={topRatedMovies} id="toprated"/>


            {/* conditional rendering */}
            {selectedMovieId && <MoviesDetails/>}
         
        </div>
    </div>
  )
}

export default MoviesContent