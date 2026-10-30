import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { nowPayingMovie } from "../../core/actions/now-playing"
import { Popular } from "../../core/actions/popular"
import { UpComing } from "../../core/actions/upcoming"
import { topRated } from "../../core/actions/top-rated"
import detailMovieRequest from "../../core/actions/details-movie"


export const useMovies = () => {
    const nowPlayingQuery = useQuery({ 
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPayingMovie,
        staleTime: 1000 * 60 *60 * 24
    })

    const popularyQuery = useQuery({
        queryKey: ['popular'],
        queryFn: ()=> Popular(1),
        staleTime: 1000 * 60 * 60* 24
    })
    const topRatedQuery = useQuery({
        queryFn: ()=> topRated(),
        queryKey: ['toprated'],
        staleTime: 1000*60*30
    })
    const upcomingQuery = useQuery({
        queryFn: () =>UpComing(),
        queryKey: ['upcoming'],
        staleTime: 1000*60*60*1
    })

    const popularInfiniteQuery = useInfiniteQuery({
        queryKey: ['popularInfi', 'infinite'],
        // pageParam inicia en 1 si es undefined
        queryFn: ({ pageParam = 1 }) => Popular(pageParam),
        getNextPageParam: (lastPage) => {
        if (!lastPage) return undefined;

        const currentPage = lastPage.page ?? 1;
        // OJO: Usa el nombre exacto de la propiedad que retorna tu función Popular
        const totalPages = lastPage.totalpage ?? 0; 

        if (currentPage < totalPages) {
            return currentPage + 1;
        }
        return undefined;
        },
        staleTime: 1000 * 60 * 60 * 24,
     });




    return{
        nowPlayingQuery,
        popularyQuery,
        upcomingQuery,
        topRatedQuery,
        popularInfiniteQuery,

    }

}


export const useMovieDetails = (idMovie: number) => {
    return useQuery({
        queryKey: ['detailsMovie', idMovie],
        queryFn: () => detailMovieRequest(idMovie),
        enabled: Number.isFinite(idMovie),
        staleTime: 1000 * 60 * 5,
    });
};