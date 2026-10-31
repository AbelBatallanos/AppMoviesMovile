import { ICreditostCast } from "../../infraestructure/interface/ImovieComplete_Details"
import { ICredistCast } from "../../infraestructure/interface/ImovieComplete_Details_Response"
import { MovieMapper } from "../../infraestructure/mappers/movie.mapper"
import { api_clientMovie } from "../api/api.movie.config"




export const CreditsCast = async(idmovie : number): Promise<ICreditostCast>=>{
    const {data} = await api_clientMovie.get<ICredistCast>(`/${idmovie}/credits`)
    const mapperCredist = MovieMapper.fromDetailtsMovieToCast(data);
    console.log(mapperCredist.cast)
    return mapperCredist
    }