import React from 'react'
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { HiInformationCircle } from "react-icons/hi";


function MovieSlider() {
    return (
        <section className='py-12' id="">
            <div className='container mx-auto px-4'>
                <div className='flex items-baseline justify-between mb-8'>
                    <div className='text-2xl md:text-3xl font-bold text-white'>
                        <h2>Title</h2>
                        {/* Conditional Rendering */}
                        <p className='text-neutral-400 text-sm mt-1'>Subtitle</p>
                    </div>
                    <div className='flex space-x-2'>
                        <button className='p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-white transition-all'
                            aria-label='scroll left'>
                            <HiOutlineChevronLeft className="h-5 w-5" />

                        </button>
                        <button className='p-2 rounded-full bg-neutral-800/70  hover:bg-neutral-700 text-white transition-all'
                            aria-label='scroll left'>
                            <HiOutlineChevronRight className="h-5 w-5" />
                        </button>
                    </div>

                </div>

                {/* movie slider */}
                <div className='relative'>
                    <div className='flex space-x-4 overflow-x-hidden scrollbar-hide bb-4 snap-x'>
                        {/* conditional rendering */}
                        <div className='min-w-50 md:min-w-60 snap-start relative group cursor-pointer' >
                            <div className='rounded-lg overflow-hidden bg-neutral-800 '>
                                <div className='relative aspect-2/3'>
                                    <img src="/" alt="" className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35' />
                                    {/* hover overlay */}
                                    <div className='absolute isnet-0 bg-linear-to-t from-neutral-900/90 via-neutral-900/40 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                        <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3 '>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center space-x-1'>
                                                    <HiStar className="h-4 w-4 text-yellow-400" />
                                                    <span className='text-yellow-400 text-sm font-medium'>Movies Vote Average</span>
                                                </div>
                                                <span className='text-neutral-400 text-sm'>
                                                    movies Release Date
                                                </span>
                                            </div>
                                            <button className='w-full bg-blue-600 hover:bg-blue-700 text-whitepy-3 rounded-md flex items-center justify-center gap-1 transition-all text-sm '>
                                                <HiInformationCircle className="h-4 w-4" />
                                                View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Movies Info */}
                            <div className='mt-3'>
                                <h3 className='text-white text-sm font-medium truncate'>
                                    Movies Title
                                </h3>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-1'>
                                        <HiStar className="h-3 w-3 text-yellow-500" />
                                        <span className="text-neutral-400 text-xs"> Movies Vote average</span>
                                    </div>
                                    <span className="text-neutral-500 text-xs">Movie Release Date </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default MovieSlider