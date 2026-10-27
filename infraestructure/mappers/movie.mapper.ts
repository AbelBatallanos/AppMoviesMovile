import { Imovie } from "../interface/Imovie";
import { Results } from "../interface/ImovieList_response";



export class MovieMapper{
    static fromTheMovieDBToMovie(movie : Results) : Imovie{
        return{
            id: movie.id,
            adult: movie.adult,
            backdrop: movie.backdrop_path,
            overview: movie.overview,
            popularity: movie.popularity,
            poster: 'https://image.tmdb.org/t/p/w500' +movie.poster_path,
            rating: movie.vote_count,
            releaseDate:  new Date(movie.release_date),
            title: movie.title
        }
    } 
}