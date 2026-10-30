import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Imovie } from "../../infraestructure/interface/Imovie";
import MovieItem from "./movieItem";
import { useMovies } from "@/hooks/useMovie";
import { router } from "expo-router";



interface Props{
    movies : Imovie[],
    title ?: string,
    ListInfinite ? : boolean,

}


export default function MovieHorizontalList({title,movies, ListInfinite=false} : Props){
  const { popularInfiniteQuery } = useMovies();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = popularInfiniteQuery;



   // 2. Aplanamos los datos si es infinito
  const infiniteMovies = data?.pages.flatMap((p) => p?.results ?? []) ?? [];
  
  // 2. Filtramos los duplicados usando un Map basado en el ID
  // (Si una película se repite, el Map se queda con la última versión)
  const uniqueMovies = Array.from(
    new Map(infiniteMovies.map((movie) => [movie.id, movie])).values()
  );

  // 3. Decidimos qué datos pintar
  const listData = ListInfinite ? uniqueMovies : movies;

  // 4. Función para cargar más
  const loadMore = () => {
    if (ListInfinite && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handlePressMovie = (movieId: Imovie['id']) => {
    router.push({
      pathname: `./movie/${movieId}`, 
      params: { 
        
        movieID: JSON.stringify(movieId) 
      } 
    });
  };

  return (
    <View style={{ height: 290, marginTop: 10 }}>
      {title && (
        <Text style={{ marginLeft: 5, marginBottom: 10, fontSize: 20, fontWeight: '700' }}>
          {title}
        </Text>
      )}

      {/* Mostramos un loader si es la primera carga de la lista infinita */}
      {ListInfinite && isLoading ? (
        <ActivityIndicator size="large" color="#03B5AA" style={{ marginTop: 10 }} />
      ) : (
        <FlatList
          horizontal
          data={listData}
          renderItem={({ item }) => <MovieItem onPress={()=> handlePressMovie(item.id)} item={item} />}
          keyExtractor={(item,index) => `${item.id}-${index}`}
          showsHorizontalScrollIndicator={true}
          
          // Props para el Scroll Infinito
          onEndReached={loadMore}
          
          onEndReachedThreshold={0.5}
          
          // Footer con el indicador de carga
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator size="small" color="#03B5AA" style={{ marginLeft: 10, alignSelf: 'center' }} />
            ) : null
          }
        />
      )}
    </View>
  );
}






