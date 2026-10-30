import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Imovie } from "../../../infraestructure/interface/Imovie";

export default function MovieId() {
  const insets = useSafeAreaInsets();
  const { height: screenHeight } = useWindowDimensions(); // 📱 Obtenemos la altura de la pantalla
  const { movieData } = useLocalSearchParams();
  
  const movie: Imovie | null = movieData ? JSON.parse(movieData as string) : null; 

  if (!movie) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Película no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Configuración del Header Transparente */}
      <Stack.Screen 
        options={{ 
          headerTransparent: true, 
          headerShadowVisible: false, 
          headerTitle: '', 
          headerTintColor: '#fff', // Color blanco para que se vea sobre la imagen
        }} 
      />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
      >
        {/* Contenedor de la Imagen - 60% de la pantalla */}
        <View style={{ width: '100%', height: screenHeight * 0.9 }}>
          <Image 
            source={{ uri: movie.poster }} 
            resizeMode="cover" // Usamos cover para que llene el ancho, pero el gradiente ocultará el recorte
            style={styles.image} 
          />
          
          {/* Degradado para fusionar la imagen con el fondo negro */}
          <LinearGradient
            colors={['transparent', '#000000']}
            style={styles.gradient}
          />
        </View>

        {/* Contenido de la Película */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          
          <View style={styles.metaData}>
            <Text style={styles.metaText}>⭐ {movie.rating}</Text>
            <Text style={styles.metaText}>📅 {new Date(movie.releaseDate).toDateString()}</Text>
          </View>

          <Text style={styles.sectionTitle}>Sinopsis</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
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
    height: '25%', // El degradado cubre la mitad inferior de la imagen
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: -30, // Subimos un poco el contenido para que se mezcle con el degradado
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
    marginBottom: 25,
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
  }
});