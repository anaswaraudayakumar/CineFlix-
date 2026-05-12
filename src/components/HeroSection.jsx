import React from 'react'
import { IoMdStar } from "react-icons/io";
import { HiPlay } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi";

function HeroSection() {
    return (
        <div className='relative w-full h-screen '>
            {/* movies backdrop */}
            <div className='absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-700 '>
                {/* gradient overlay */}
                <div className='absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20 '>
                    <div className='absolute inset-0 bg-linear-to-r from-neutral-900 to-transparent'></div>
                </div>
                {/* content  */}
                <div className='absolute inset-0 flex items-center z-10 container mx-auto px-4'>
                    <div className='max-w-3xl'>
                        {/* movies info */}
                        <div className='transition-all duration-700'>
                            <div className='flex items-center space-x-3 mb-4'>
                                <span className='bg-blue-600/90 text-white text-xs font-semibold px-2 py-1 rounded-sm'>
                                    FEATURED
                                </span>
                                {/* conditional Rendering */}
                                <div className='flex items-center'>
                                    <IoMdStar className='h-5 w-5 text-yellow-500' />
                                    <span>Movie Voting Average</span>
                                </div>
                                {/* Conditional Rendering  */}
                                <span className='text-neutral-400'>.</span>
                                <span className='text-neutral-300 text-sm'>Movies Release Date</span>
                                {/* conditional rendering */}
                                <>
                                    <span className='text-neutral-400'>.</span>
                                    <span className='bg-neutral-700 text-neutral-300 text-xs px-11.5 py-0.5'>18+</span>
                                </>
                                {/* Conditional Rendering close */}

                            </div>
                        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Movies Title</h1>
                        <p className='text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl'>
                            Movie Overview
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
                <div className='absolute bottom-10 left-0 right-0 flex justify-center gap2 z-10'>
                    {/* conditional rendering */}
                    <button className='h-1.5 rounded-full transition-all'></button>

                </div>

            </div>

        </div>
    )
}

export default HeroSection