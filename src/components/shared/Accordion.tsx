import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Accordion({ title, children }: { title: string, children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    // Animación nativa fluida al abrir/cerrar
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity onPress={toggleExpand} style={styles.accordionHeader} activeOpacity={0.5}>
        <Text style={styles.accordionTitle}>{title}</Text>
        <Ionicons 
          name={expanded ? "chevron-up" : "chevron-down"} 
          size={25} 
          color="#a0a0a0" 
        />
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.accordionContent}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
    height: '45%',
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: -30,
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
    lineHeight: 24,
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
  
  // --- ESTILOS DEL ACORDEÓN ---
  accordionContainer: {
    marginBottom: 15,
    backgroundColor: '#266967', // Un gris muy oscuro para que resalte sobre el negro
    borderRadius: 15,
    overflow: 'hidden',
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  accordionTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  accordionContent: {
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  accordionText: {
    color: '#d1d1d1',
    fontSize: 15,
    lineHeight: 22,
  },

  // --- ESTILOS DE LA LISTA HORIZONTAL ---
  cardItem: {
    width: 140,
    backgroundColor: '#222222',
    borderRadius: 10,
    padding: 12,
    marginRight: 12,
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
    color: '#7A306C', // Usé el color de tu headerTintColor
    fontSize: 12,
    fontWeight: '600',
  },
});