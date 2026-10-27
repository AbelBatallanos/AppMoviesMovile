import axios from 'axios'


export const api_clientMovie = axios.create({
    baseURL: process.env.EXPO_PUBLIC_THEMOVIEDB_URL,
    headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    // Si tienes token v4 (recomendado) descomenta:
    ...(process.env.EXPO_PUBLIC_API_THEMOVIEDB_TOKEN_LECTURA ? { Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_THEMOVIEDB_TOKEN_LECTURA}` } : {}),
  },
    params:{
        language : 'es-MX',
    },
    
})
