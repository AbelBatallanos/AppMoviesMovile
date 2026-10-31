import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { ImovieComplete_Details } from "../../../infraestructure/interface/ImovieComplete_Details";
import Accordion from "./Accordion";

interface Props {
    companies: ImovieComplete_Details['companiasProducciones'];
}



export default function CompaniesMovie({companies}: Props){



    return (
        <Accordion title="Compañías Productoras">
                <FlatList
                horizontal
                data={companies} // Cambia esto por los datos reales de tu API (ej. movie.production_companies)
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

    );
}


const styles = StyleSheet.create({
    cardItem: {
        width: 240,
        height: 240,
        borderRadius: 10,
        padding: 25,
        marginRight: 14,
        justifyContent: 'space-between',
        borderRightWidth: 2,
        borderRightColor: '#F4EDED'
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
})



