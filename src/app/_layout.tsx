
import {Slot, Stack} from 'expo-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HeaderShownContext } from 'expo-router/build/react-navigation';


export default function RootLayout(){
    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{headerShown: false}}/>
        </QueryClientProvider>
    );
}