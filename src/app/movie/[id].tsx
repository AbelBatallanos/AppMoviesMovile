import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Imovie } from "../../../infraestructure/interface/Imovie";
import { useMovieDetails } from "@/hooks/useMovie";

import { LayoutAnimation, Platform, UIManager } from 'react-native';
import Accordion from "@/components/shared/Accordion";
import { FormatDurationMovie } from "@/hekper/formatDurationMovie";
import { Ionicons } from "@expo/vector-icons";

// Habilitar LayoutAnimation en Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental;
}



export default function MovieId() {
  const insets = useSafeAreaInsets();
  const { height: screenHeight } = useWindowDimensions(); // 📱 Obtenemos la altura de la pantalla
  const { movieID } = useLocalSearchParams();
  const {data} = useMovieDetails(Number(movieID))
  const movie = data;
  const companias = movie?.companiasProducciones;
  const generos = movie?.generos;
  console.log(movie)

  if (!movie) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Película no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom+50}]}>
      {/* Configuración del Header Transparente */}
      <Stack.Screen 
        options={{ 
          headerTransparent: true, 
          headerShadowVisible: false, 
          headerTitle: '', 
          headerTintColor: '#7A306C', // Color blanco para que se vea sobre la imagen
        }} 
      />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: insets.bottom + 2 }}
      >
        {/* Contenedor de la Imagen - 60% de la pantalla */}
        <View style={{ width: '100%', height: screenHeight * 0.9 }}>
          <Image 
            source={{ uri: movie.poster }} 
            resizeMode="cover" // Usamos cover para que llene el ancho, pero el gradiente ocultará el recorte
            style={styles.image}  
          />
          <LinearGradient
            start={{x: 0, y: 0}}
            colors={['rgba(0,0,0,0.7)','transparent','transparent' ]}
            style={{position: "absolute",zIndex:1, height:screenHeight * 0.4, width: "100%"}}
          />
          
          {/* Degradado para fusionar la imagen con el fondo negro */}
          <LinearGradient
            colors={['transparent', '#000000']}
            style={styles.gradient}
          />
        </View>

        {/* Contenido de la Película */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{movie.titulo}</Text>
          
          <View style={styles.metaData}>
            <Text style={styles.metaText}>⭐ {movie.totalVotos}</Text>
            <Text style={styles.metaText}>📅 {new Date(movie.lanzamiento).toDateString()}</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
              <Ionicons name="time-outline" color={'white'} size={22}/>
              <Text style={styles.metaText}>{FormatDurationMovie(movie.duracion)}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginBottom: 15}}>
            <Text style={{color:'#F4EDED', fontSize: 18, marginBottom: 8}}>Generos :</Text>
            <FlatList
              data={generos}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{gap:10}}
              keyExtractor={(item, index)=> `${item.id}-${index}`}
              renderItem={({item})=> (
                <View>
                    <Text style={[styles.cardTitle, {fontSize: 14,color: '#C2D076'}]}>{item.nombre}</Text>
                </View>
              )}
            />
          </View>
          <Text style={styles.sectionTitle}>Sinopsis</Text>
          <Text style={styles.overview}>{movie.resumen}</Text>
          
          <View style={{ marginTop: 20 }}>
            
            {/* ACORDEÓN */}
            <Accordion title="Información Adicional">
              <Text style={styles.accordionText}>
                Aquí puedes colocar cualquier información extra de la película, 
                como el presupuesto, los ingresos en taquilla, o datos curiosos 
                del rodaje. Este es el contenido del primer acordeón.
              </Text>
            </Accordion>

            {/* ACORDEÓN 2: Lista Horizontal */}
            <Accordion title="Compañías Productoras">
              <FlatList
                horizontal
                data={companias} // Cambia esto por los datos reales de tu API (ej. movie.production_companies)
                keyExtractor={(item, index) => `${item.id}-${index}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 5, paddingRight: 20 }}
                renderItem={({ item }) => (
                  <View style={styles.cardItem}>
                    <Image
                    style={{width:'100%', height: '60%'}}
                     resizeMode="contain"  
                    source={{uri: `${item.logo}`}}
                    />
                    <Text style={styles.cardTitle}>{item.nombre}</Text>
                    <Text style={styles.cardCountry}>🌍 {item.paisOrigen}</Text>
                  </View>
                )}
              />
            </Accordion>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Fondo negro para el modo oscuro minimalista
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '15%', // El degradado cubre la mitad inferior de la imagen
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 10, // Subimos un poco el contenido para que se mezcle con el degradado
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  metaData: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  metaText: {
    color: '#a0a0a0',
    fontSize: 15,
    fontWeight: '600',
    marginRight: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    color: '#d1d1d1',
    lineHeight: 24, // Espaciado entre líneas para mejor lectura
    textAlign: 'justify',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
  },
  accordionText: {
    color: '#d1d1d1',
    fontSize: 15,
    lineHeight: 22,
  },
   cardItem: {
    width: 240,
    height: 240,
    backgroundColor: '#3E3C3C',
    borderRadius: 10,
    padding: 25,
    marginRight: 14,
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#a0a0a0',
    fontSize: 12,
    marginBottom: 8,
  },
  cardCountry: {
    color: '#FFFFFC', // Usé el color de tu headerTintColor
    fontSize: 12,
    fontWeight: '600',
  },
});