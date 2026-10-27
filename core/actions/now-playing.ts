import { MovieListDbResponse } from "../../infraestructure/interface/ImovieList_response";
import { MovieMapper } from "../../infraestructure/mappers/movie.mapper";
import { api_clientMovie } from "../api/api.movie.config"



export const nowPayingMovie = async()=> {
    try{
        const {data} = await api_clientMovie.get<MovieListDbResponse>('/now_playing');
        const mapper = data.results.map(MovieMapper.fromTheMovieDBToMovie);

        console.log({...data.dates,
            page : data.page,
            results : mapper,
            totalresults: data.total_results,
            totalpage :data.total_pages
        });
        return {...data.dates,
            page : data.page,
            results : mapper,
            totalresults: data.total_results,
            totalpage :data.total_pages
        }
    }
    catch(error){
        console.log(error);
    }

}