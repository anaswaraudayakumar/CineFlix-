import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MoviesDetails from './MoviesDetails'

function MoviesContent() {
  return (
    <div>
        <HeroSection/>
        <div className='bg-linear-to-b from-neutral-900 to-neutral-950'>
            <MovieSlider/>
            <GenreSection/>

            {/* conditional rendering */}
            {/* <MoviesDetails/> */}
        </div>
    </div>
  )
}

export default MoviesContent