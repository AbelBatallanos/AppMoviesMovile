import { ImovieComplete_Details } from "../../infraestructure/interface/ImovieComplete_Details";
import { ImovieCompleteDetailsResponse } from "../../infraestructure/interface/ImovieComplete_Details_Response";
import { MovieMapper } from "../../infraestructure/mappers/movie.mapper";
import { api_clientMovie } from "../api/api.movie.config"



const detailMovieRequest = async(id : number)=>{
    const {data} = await api_clientMovie.get<ImovieCompleteDetailsResponse>(`/${id}`);
    
    const mapper =  MovieMapper.fromTheMovieToDetailsMovie(data);

    return mapper;
} 


export default detailMovieRequest;