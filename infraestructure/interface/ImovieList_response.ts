

export interface MovieListDbResponse {
    page: number,
    dates: Dates,
    total_pages: number,
    total_results: number
    results: Results[]
} 

export interface Dates{
    maximum: string,
    minimum : string
}


export interface Results {
    adult: boolean,
    backdrop_path: string,
    id: number,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    vote_count: number
    video: false
}