import { Image, Pressable,
  PressableProps, StyleSheet, Text, View } from "react-native";
import { Imovie } from "../../infraestructure/interface/Imovie";


interface Props extends PressableProps{
    item : Imovie ,
    carouselWidth ?: number,
    carouselHeight?: number,
}

const MovieItem = ({item, carouselWidth, carouselHeight, onPress} : Props)=> {
    return(
        <Pressable onPress={onPress}  style={[styles.slide, { width: 150, height: 230, marginLeft:15, paddingHorizontal:5, paddingVertical: 2}]}>
            <Image
            source={{ uri: `${item.poster}` }}
            style={[styles.poster, {maxHeight: '100%',display:'flex',marginRight:0, alignItems: 'center', justifyContent:'center', aspectRatio:0.7, }]}
            resizeMode="cover" height={100}

            />
            <Text style={[styles.title, {width: '30%' ,textAlign: "left",alignItems:'center', marginBottom: 15}]} numberOfLines={3}>
            {item.title}
            </Text>
        </Pressable>
    )
}

export default MovieItem


const styles = StyleSheet.create({
    slide: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
    poster: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
    title: {
    marginTop: 8,
    color: '#00000',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  
})