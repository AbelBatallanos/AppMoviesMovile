import { FlatList } from "react-native";
import { ICasting, ICreditostCast } from "../../../infraestructure/interface/ImovieComplete_Details";
import Cast from "./Cast";

interface Props{
    cast : ICasting[]
}


export default function CardCast({cast}: Props){

    return(
        <FlatList 
            data={cast}
            contentContainerStyle={{paddingVertical: 0, paddingRight: 10}}
            renderItem={({item})=> (<Cast cast={item} />)}
            horizontal
            keyExtractor={(item, index)=> `${item.id}-${index}`}
            showsHorizontalScrollIndicator={false}
        />
    );
}