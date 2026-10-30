import { Float } from "react-native/Libraries/Types/CodegenTypes"



export interface ImovieComplete_Details {
    generos : IGeneros[],
    id: number,
    presupuesto : number,
    paginaPage : string,
    adulto: boolean,
    lenguaOrigen : string
    paisOrigen: string,
    lanzamiento : Date,
    duracion: number,
    ingresos: number,
    promedioVotos: Float,
    totalVotos : number,
    popularidad: number,
    resumen: string,
    eslogan?: string,
    poster: string,
    companiasProducciones: ICompanias[]
}

interface IGeneros {
    id: number,
    nombre: string
}

interface ICompanias{
    id: number,
    logo: string,
    nombre: string,
    paisOrigen: string
}