import { useQuery } from "@tanstack/react-query"
import { nowPayingMovie } from "../../core/actions/now-playing"
import { Popular } from "../../core/actions/popular"
import { UpComing } from "../../core/actions/upcoming"
import { topRated } from "../../core/actions/top-rated"



export const useMovies = () => {

    const nowPlayingQuery = useQuery({ 
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPayingMovie,
        staleTime: 1000 * 60 *60 * 24
    })

    const popularyQuery = useQuery({
        queryKey: ['populary'],
        queryFn: Popular,
        staleTime: 1000 * 60 * 60* 24
    })
    const topRatedQuery = useQuery({
        queryFn: topRated,
        queryKey: ['toprated'],
        staleTime: 1000*60*30
    })
    const upcomingQuery = useQuery({
        queryFn: UpComing,
        queryKey: ['upcoming'],
        staleTime: 1000*60*60*1
    })
    return{
        nowPlayingQuery,
        popularyQuery,
        upcomingQuery,
        topRatedQuery
    }

}