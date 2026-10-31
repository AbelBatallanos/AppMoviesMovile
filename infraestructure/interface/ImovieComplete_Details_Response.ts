import { Float } from "react-native/Libraries/Types/CodegenTypesNamespace"

export interface ImovieCompleteDetailsResponse {
    backdrop_path: string,
    adult: boolean,
    genres : Igenres[],
    original_language: string,
    homepage: string,
    origin_country: string,
    id: number,
    poster_path: string,
    popularity: number,
    overview: string,
    production_companies: IproductionCompanies[],
    release_date: Date,
    revenue: number,
    runtime: number,
    vote_average: Float,
    budget: number
    vote_count: number,
    tagline: string,
    title: string,
} 


interface Igenres {
    id: number,
    name: string,
}

interface IproductionCompanies {
    id: number,
    logo_path : string,
    name: string,
    origin_country: string
}


export interface ICredistCast {
    id: number,
    cast: ICast[]
}

export interface ICast {
    id: number,
    name: string,
    known_for_department: string,
    profile_path: string,
    character: string,
    popularity: Float
}