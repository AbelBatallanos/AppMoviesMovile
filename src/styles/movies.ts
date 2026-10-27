import { StyleSheet } from "react-native";



const movieItemStyle = StyleSheet.create({
    listMovies : {
        padding: 15,
        marginHorizontal:  'auto',
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignContent: 'center',

    },
    movieItem : {
        marginHorizontal: 10
    },
    imgMovie: {
        width: '100%',
        padding: 5,
        marginHorizontal: 'auto',

    },

});

export default movieItemStyle;