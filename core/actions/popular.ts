import { MovieListDbResponse } from "../../infraestructure/interface/ImovieList_response";
import { MovieMapper } from "../../infraestructure/mappers/movie.mapper";
import { api_clientMovie } from "../api/api.movie.config"




export const Popular = async() =>{
    try{
        const {data} =  await api_clientMovie.get<MovieListDbResponse>('/popular');
        const mapper = data.results.map(MovieMapper.fromTheMovieDBToMovie);
        return {...data.dates,
            page : data.page,
            results : mapper,
            totalresults: data.total_results,
            totalpage :data.total_pages
        }
    }catch(error){

    }
}