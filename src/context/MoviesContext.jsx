import React,{ createContext, useContext, useEffect, useState } from "react";
import { getGenreAPI, getPopularMoviesAPI, getTopRatedMoviesAPI, getTrendingMoviesAPI } from "../api/allApi";


export const MoviesContext = createContext()

export const useMovies = () => useContext(MoviesContext)

export const MoviesProvider = ({children})=>{
    const [trendingMovies,setTrendingMovies] = useState([])
    const [popularMovies,setPopularMovies] = useState([])
    const [topRatedMovies,setTopRatedMovies] = useState([])
    const [genres,setGenres] = useState([])
    const [loading,setLoading] = useState(true)
    const[error,setError] = useState(null)
    const [selectedMovieId,setSelectedMovieId] = useState(null)

    useEffect(()=>{
        const fetchMovieData = async ()=>{
         try {
            setLoading(true)
            const [trending,popular,topRated,genreList] = await Promise.all([
                getTrendingMoviesAPI(),
                getPopularMoviesAPI(),
                getTopRatedMoviesAPI(),
                getGenreAPI()
            ])
            setTrendingMovies(trending.data.results)
            setPopularMovies(popular.data.results)
            setTopRatedMovies(topRated.data.results)
            setGenres(genreList.data.results)
        } catch (error) {
            console.log("Error fetching movie data:",err);
            setError(error)
            
        }finally{
            setLoading(false)
        }
    }
    fetchMovieData()
    },[])

    const openMoviesDetails = (moviesId) => {

    setSelectedMovieId(moviesId);

    document.body.style.overflow = "hidden";
};


const closeMovieDetails = () => {

    setSelectedMovieId(null)

    document.body.style.overflow = ""
};


return (

    <MoviesContext.Provider

        value={{

            trendingMovies,
            popularMovies,
            topRatedMovies,
            genres,
            loading,
            error,
            selectedMovieId,
            openMoviesDetails,
            closeMovieDetails,
        }}
    >

        {children}

    </MoviesContext.Provider>
);
    

}