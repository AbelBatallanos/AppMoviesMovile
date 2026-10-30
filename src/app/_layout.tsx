import {router, Slot, Stack} from 'expo-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { HeaderShownContext } from 'expo-router/build/react-navigation';
import {Host, Icon} from '@expo/ui';

import { Pressable } from 'react-native';
import Menu from '@expo/material-symbols/menu.xml';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout(){
    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{
                  contentStyle: {
                    backgroundColor: 'white',
                    },
                    headerShown: true,
                    headerLeft: ({canGoBack}) => {
                    {return canGoBack && (<Pressable 
                        onPress={() => router.back()} 
                        style={{ marginRight: 20 }} // Ajusta el espaciado según necesites
                    >
                        <Ionicons name="arrow-back-circle" size={35} color="#69B3C8" />
                    </Pressable>) }}
                    }} >

            </Stack>
        </QueryClientProvider>
    );
}