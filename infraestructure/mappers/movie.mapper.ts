import { Imovie } from "../interface/Imovie";
import { ImovieComplete_Details } from "../interface/ImovieComplete_Details";
import { ImovieCompleteDetailsResponse } from "../interface/ImovieComplete_Details_Response";
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
    static fromTheMovieToDetailsMovie(m: ImovieCompleteDetailsResponse): ImovieComplete_Details{
        return{
            adulto: m.adult,
            companiasProducciones: m.production_companies.map(mv => 
                ({id: mv.id, logo:'https://image.tmdb.org/t/p/w500' + mv.logo_path, nombre: mv.name, paisOrigen: mv.origin_country })),
            generos: m.genres.map(mv =>
                ({id: mv.id, nombre: mv.name})),
            duracion: m.runtime,
            ingresos: m.revenue,
            presupuesto: m.budget,
            lanzamiento: m.release_date,
            lenguaOrigen: m.original_language,
            paginaPage: m.homepage,
            paisOrigen: m.origin_country,
            popularidad: m.popularity,
            promedioVotos: m.vote_average,
            poster: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
            resumen: m.overview,
            totalVotos: m.vote_count,
            id: m.id,
            eslogan: m.tagline
        }
    }
}