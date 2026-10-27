import { FlatList, Text, View } from "react-native";
import { Imovie } from "../../infraestructure/interface/Imovie";
import MovieItem from "./movieItem";



interface Props{
    movie : Imovie[],
    title ?: string,
}



export default function MovieHorizontalList({title,movie} : Props){



    return(
        <View style={{ height: 290, marginTop:10 }}>
            {title && <Text style={{marginLeft: 5, marginBottom: 10, fontSize: 20, fontWeight: '700'}}>{title}</Text>}

            <FlatList 
                horizontal={true}   
                data={movie}
                renderItem={({item} ) => (<MovieItem item={item} />)}
                showsHorizontalScrollIndicator={true}
                windowSize={100}
                zoomScale={10}
                keyExtractor={(item)=> `${item.id}`}
            >   
            </FlatList>

        </View>
    );
}






