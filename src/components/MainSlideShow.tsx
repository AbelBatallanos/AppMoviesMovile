// src/core/components/MainSlideShow.tsx
import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  I18nManager,
} from 'react-native';
import { Carousel, CarouselItemAnimation, CarouselRef } from 'react-native-reanimated-carousel';
import { Imovie } from '../../infraestructure/interface/Imovie';
import MovieItem from './movieItem';


import Animated, {
	Extrapolation,
	interpolate,
	interpolateColor,
	useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";


interface Props {
  movies: Imovie[];
  /** Ancho del viewport. Si no se envía, se usa el ancho de la pantalla. */
  width?: number;
}

export default function MainSlideShow({ movies, width: externalWidth }: Props) {
  // 📐 Dimensiones actuales (se actualizan al rotar el dispositivo)
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  // 🎯 Ref tipada al carrusel (API de instancia)
  const carouselRef = useRef<CarouselRef>(null);

  // 📏 Ancho del carrusel (usa el prop o el ancho de ventana)
  const carouselWidth = externalWidth ?? windowWidth;

  // 🖼️ Relación de aspecto de un póster de TMDB (2:3 aprox.)
  const posterAspectRatio = 2 / 3;
  const carouselHeight = carouselWidth * posterAspectRatio * 0.9; // margen visual

  // 🔄 Detecta orientación para decidir si el carrusel es vertical u horizontal
  const isLandscape = windowWidth > windowHeight;

  console.log(carouselHeight)

  // Si no hay películas, no renderizamos nada
  if (!movies || movies.length === 0) return null;

  return (
    <View >
        <Text style={{marginLeft: 10,marginVertical: 5, color: 'black', fontSize:20, fontWeight: '700'}}>Movies</Text>
      <Carousel 
        autoplayDirection='backward'
        overscrollEnabled={true}
        ref={carouselRef}
        // itemAnimation={animationStyle}
        data={movies}
        autoplay={false} 
        itemSize={170}
        renderItem={(item)=>(<MovieItem key={item.item.id} item={item.item} carouselWidth={carouselWidth} carouselHeight={carouselHeight}/>)}
        style={{ width: carouselWidth, display:'flex', flexDirection: 'row', alignItems:'center', justifyContent:'space-around', height: carouselHeight+60, paddingTop:'10%' , paddingRight: 0,}}
        // 🔁 Orientación adaptable:
        //    - En horizontal (landscape) usamos carrusel vertical,
        //      pero si prefieres siempre horizontal, cámbialo a "horizontal".
        orientation={isLandscape ? 'vertical' : 'horizontal'}
        // 🔄 Loop infinito (por defecto es false)
        loop={true}
        // 🧩 Clave estable para evitar re-montajes al actualizar datos
        keyExtractor={(item) => String(item.id)}
        // ⚡ Rendimiento: solo montamos unas cuantas diapositivas
        renderWindowSize={isLandscape ? 2: 3}
        // 🖐️ Permite gestos de arrastre
        scrollEnabled={true}
        // 🎯 Ajuste de alineación al soltar el gesto
        snapMode="page"
        // 🎨 Animación de transición (timing con duración personalizada)
        animation={{ type: 'timing', duration: 200 }}
        // 📊 Callback opcional para saber qué índice está visible
        onSnapToItem={(index) => {
          // Aquí puedes actualizar un estado para paginación externa
          console.log('Película visible:', index);
        }}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },
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
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});