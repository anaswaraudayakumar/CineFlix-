import axiosInstance from "./axiosInstance";

//trending movies
export const getTrendingMoviesAPI = async (page=1) => {

  return await axiosInstance.get(
    "/trending/movie/week",{
            params:{
                language: "en-US",
                page
            }
        }
  );
};

//popular movie
export const getPopularMoviesAPI = async (page=1)=>{
    return await axiosInstance.get(
        "/movie/popular",{
            params:{
                language: "en-US",
                page
            }
        }
    )
}
//top rated movie
export const getTopRatedMoviesAPI = async (page = 1)=>{
    return await axiosInstance.get(
        "/movie/top_rated",{
            params:{
                language: "en-US",
                page
            }
        }
    )
}

//movie by genre
export const getMoviesByGenreAPI = async (genreId, page = 1) => {

    return await axiosInstance.get(
        "/discover/movie",
        {
            params: {
                with_genres: genreId,
                language: "en-US",
                page
            }
        }
    )
}

//fetch genres
export const getGenreAPI = async () => {

    return await axiosInstance.get(
        "/genre/movie/list",
        {
            params: {
                language: "en-US",

            }
        }
    )
}

//fetchMovieDetails
export const getMoviesByDetailsAPI = async (movideId) => {

    return await axiosInstance.get(
        `/movie/${movieId}`,
        {
            params: {
                language: "en-US",
            }
        }
    )
}

//search movies
export const getMoviesBySearchAPI = async (movieName,page) => {

    return await axiosInstance.get(
        "/search/movie",
        {
            params: {
                query:movieName,
                language: "en-US",
                page
            }
        }
    )
}

//image url
export const getImageURL = (
    path,
    size = "original"
) => {

    if (!path) {

        return "https://via.placeholder.com/400x600?text=No+Image+Available";
    }

    return `https://image.tmdb.org/t/p/${size}${path}`;
};