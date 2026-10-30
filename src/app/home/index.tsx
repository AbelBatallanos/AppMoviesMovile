import MainSlideShow from "@/components/MainSlideShow";
import { useMovies } from "@/hooks/useMovie";
import { ActivityIndicator, ScrollView, Text, View } from "react-native"

import {SafeAreaInsetsContext, SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MovieHorizontalList from "@/components/MovieHorizontalList";
import UpComigList from "@/components/UpComingList";
import TopRatedList from "@/components/TopRatedList";

const HomeScreen = ()=> {
    const {nowPlayingQuery, popularyQuery, upcomingQuery, topRatedQuery} = useMovies();
    
    const safeArea = useSafeAreaInsets();
    console.log(safeArea.top)
    if(nowPlayingQuery.isLoading){
        return (
            <View style={{flex:1, justifyContent: 'center'}}>
                <ActivityIndicator size={40} color={'#03B5AA'}></ActivityIndicator>
            </View>
        );
    }

    return (
        <SafeAreaView >
            <ScrollView >
            <GestureHandlerRootView >
                <View style={{ paddingRight:10, paddingTop: safeArea.top }}>
                    {/* <Text>HOME</Text> */}
                        <MainSlideShow movies={nowPlayingQuery.data?.results??[]}></MainSlideShow>
                </View>
                <View>
                    <MovieHorizontalList title="Popular" ListInfinite={true} movies={popularyQuery.data?.results??[]} />
                </View>
                <UpComigList movies={upcomingQuery.data?.results ?? []}/>
                <TopRatedList movies={topRatedQuery.data?.results ?? []}/>
            </GestureHandlerRootView>
            </ScrollView>
        </SafeAreaView>
        );
}

export default HomeScreen;