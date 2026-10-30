import { View } from "react-native";
import { Imovie } from "../../infraestructure/interface/Imovie";
import MovieHorizontalList from "./MovieHorizontalList";


interface Props{
    movies: Imovie[]
}



export default function TopRatedList({movies}: Props){

    return(
        <View>
            <MovieHorizontalList title="Mejores Calificadas" movies={movies}/>
        </View>
    );
}








