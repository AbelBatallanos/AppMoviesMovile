import { Image, StyleSheet, Text, View } from "react-native";
import { ICasting } from "../../../infraestructure/interface/ImovieComplete_Details";

interface Props {
    cast : ICasting, 
}

export default function Cast({cast}: Props){
    
    
    return(
        <View style={{...styles.cardItem}}>
            <Image 
                source={{uri: `${cast.perfilImage}`}}
                resizeMode="contain"
                style={{width:'100%', height: '60%' }}
            />
            <Text style={{...styles.castTitle, textAlign: "center", color:'#EBBA0A'}}>{cast.personaje.length ? cast.personaje: 'ninguno'}</Text>
            <Text style={{color: '#fff',fontSize: 15, textAlign: 'center', marginHorizontal: 10}}>{cast.nombre}</Text>
            <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
                <Text style={{color:'#7FBF5C'}}>{cast.departamento}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    castTitle : {
        fontSize: 15, 
        color: '#fff'
    },
    cardItem: {
        width: 150,
        height: 240,
        backgroundColor: '#1B4B49',
        borderRadius: 15,
        padding: 20,
        marginRight: 14,
        justifyContent: 'space-between',
    },
})