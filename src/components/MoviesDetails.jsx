import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";
import { HiPlay } from "react-icons/hi2";
import { HiPlus } from "react-icons/hi2";
import { HiOutlineGlobeAlt } from "react-icons/hi2"; 

function MoviesDetails() {

    return (
       <p>
            <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto'>
                <div className='relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[90vh] overflow-hidden '>
                    {/* close Button */}
                    <button className='absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/70 text-white hover:bg-neutral-600/80 transition-all '>
                        <IoClose className='h-6 w-6' />
                    </button>
                    {/* conditional rendering */}
                    <div className='flex items-center justify-center h-96'>
                        <div className='animate-pulse'>
                            <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'>
                                <p>Loading Details......</p>
    
                            </div>
    
                        </div>
                        {/* if*/}
                        <div className='flex items-center justify-center h-96 '>
                            <div className='text-center'>
                                <HiOutlineExclamationTriangle className='h-16 w-16 mx-auto text-red-500' />
                                <h2 className='text-xl font-bold mt-4'>Failed to load movie details</h2>
                                <p className='mt-2 text-neutral-400'>Error</p>
                                <button className='mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6  rounded-md'>Close</button>
                            </div>
                        </div>
                        {/* Else */}
                        <div>
                            {/* backdrop header */}
                            <div className='relative h-72 md:h-96 w-full'>
                                {/* conditional rendering */}
                                <img src="/" alt="" className='w-full h-full object-cover' />
                                {/* else */}
                                <div className='h-full w-full bg-neutral-700'> </div>
                                {/* gradient overlay */}
                                <div className='absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent'></div>
                            </div>
                            <div className='p-6 md:p-8'>
                                <div className='md:flex gap-8 -mt-32 md:-mt-48 relative'>
                                    {/* poster */}
                                    <div className='w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0'>
                                        <div className='rounded-lg overflow-hidden shadow-lg border border-neutral-700'>
                                            {/* conditional rendering */}
                                            <img src="/" alt="" className='w-full h-auto' />
                                            {/* Else */}
                                            <div className='w-full aspect-[2/3] bg-neutral-700  flex items-center justify-center'>
                                                No poster Available
                                            </div>
                                        </div>
                                    </div>
                                    {/* Movies Info */}
                                    <div className="flex-1">
                                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                                            Movies Title
                                            {/* Conditional Rendering */}
                                            <span className="text-neutral-400 font-normal ml-2"></span>
                                        </h1>
    
                                        {/* Rating and Other meta */}
                                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center">
                                            {/* Conditional Rendering */}
                                            <div className="flex items-center">
                                                <HiStar className="h-5 w-5 text-yellow-500" />
                                                <span className="ml-1 font-medium">
                                                    Movies Vote Average
                                                </span>
                                            </div>
                                            {/* else */}
                                            <span className='text-neutral-300'>Movie Runtime</span>
                                            {/* conditional rendering */}
                                            <span className='text-neutral-300'>Movie Relese Date</span>
                                            {/* conditional rendering */}
                                            <span className='bg-red-500/80 text-white text-xs px-2 py-0.5 rounded'>
                                                18+</span>
                                        </div>
                                        {/* genres */}
                                        {/* conditional rendering */}
                                        {/* Genre Section */}
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">
                                                Genre Name
                                            </span>
                                        </div>
    
                                        {/* Tagline */}
                                        <p className="mt-4 text-neutral-400 italic">Movies Tagline</p>
    
                                        {/* Overview */}
                                        <div className="mt-6">
                                            <h2 className="text-xl font-semibold text-white mb-2">Overview</h2>
                                            <p className="text-neutral-300">Movie Overview</p>
                                        </div>
    
                                        {/* Buttons */}
                                        <div className="mt-8 flex flex-wrap gap-3">
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                                                <HiPlay className="h-5 w-5" />
                                                Watch Now
                                            </button>
                                            <div className='bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all'>
                                                <HiPlus className='h-5 w-5' />
                                                Add to Watchlist
                                            </div>
                                        </div>
    
                                    </div>
                                    {/* Additional details */}
                                    <div className='mt-12 rid grid-cols-1 md:grid-cols-2 gap-8'>
                                        <div>
                                            <h2 className='text-xl font-semibold text-white mb-4 '>
                                                Details
                                            </h2>
                                            <div className='space-y-4'>
                                                {/* conditional rendering */}
                                                <div className='text-neutral-400 text-sm mb-1'>
                                                    <h3 className='text-neutral-400 text-sm mb-1'>
                                                        Production Companies
                                                    </h3>
                                                    <p className='text-white'>
                                                        Movies Production Countries
                                                    </p>
                                                </div>
                                                <div className='text-neutral-400 text-sm mb-1'>
                                                    <h3 className='text-neutral-400 text-sm mb-1'>
                                                        Language
                                                    </h3>
                                                    <p className='text-white'> Language </p>
                                                </div>
                                                <div className='text-neutral-400 text-sm mb-1'>
                                                    <h3 className='text-neutral-400 text-sm mb-1'>
                                                        Budget
                                                    </h3>
                                                    <p className='text-white'> Movie Budget </p>
                                                </div>
                                                <div className='text-neutral-400 text-sm mb-1'>
                                                    <h3 className='text-neutral-400 text-sm mb-1'>
                                                        Revenue
                                                    </h3>
                                                    <p className='text-white'> Revenue</p>
                                                </div>
                                                <div className='text-neutral-400 text-sm mb-1'>
                                                    <h3 className='text-neutral-400 text-sm mb-1'>
                                                        Status
                                                    </h3>
                                                    <p className='text-white'>Status</p>
                                                </div>
                                                <div className='text-neutral-400 text-sm mb-1'>
                                                    <h3 className='text-neutral-400 text-sm mb-1'>
                                                        Original Language
                                                    </h3>
                                                    <p className='text-white'>Original Language</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Right coloumn */}
                                        <div>
                                            <h2 className="text-xl font-semibold text-white mb-4">
                                                Rating
                                            </h2>
                                            {/* conditional Rendering */}
                                            <div className="flex items-center">
                                                {/* Circular Progress/Average */}
                                                <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center mr-4">
                                                    <span className="text-3xl font-bold">
                                                        Movie Average
                                                    </span>
                                                </div>
    
                                                {/* Votes Progress Bar */}
                                                <div className="flex-1">
                                                    <p className="text-neutral-300">Votes</p>
                                                    <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
    
                                            {/* Fallback State */}
                                            {/* Else */}
                                            <p className="text-neutral-400 ">No Rating Available</p>
                                        </div>
                                        {/* IMDB and Home page link */}
                                        <div className='mt-8 space-y-4'>
                                            {/* conditional rendering */}
                                            <a href="#" className='inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 rounded transition-all'>
                                              < HiOutlineGlobeAlt className='h-5 w-5 mr-2'/>
                                                Official Website 
                                            </a>
                                            {/* conditional rendering */}
                                            <a href="" className='inline-flex items-center bg-yellow-700 hover:bg-yellow-600 text-white py-2 px-4 rounded transition-colors'>
                                                View On ImDB <HiPlay/>
                                            </a>
    
                                        </div>
                                    </div>
    
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
       </p>
    )
}

export default MoviesDetails