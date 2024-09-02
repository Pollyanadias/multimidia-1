'use client'

import {createContext, ReactNode, useState} from 'react'

type HomeContextData = {
    contador: number;
    playing: boolean;
    playing_texto: string;
    incremento: () => void;
    togglePlaying: () => void;
}

export const HomeContext = createContext({} as HomeContextData);

type ProviderProps ={
    children: ReactNode;
}

const HomeContextProvider = ({children}: ProviderProps) => {
    const [contador, setContador] = useState(0);
    const [playing, setPlaying] = useState(false);

    const incremento = () => {
        setContador (contador + 1);
    };

    const togglePlaying = () => {
        setPlaying (!playing);
    };

    const playing_texto = playing ? "Tocar" : "pausar";

    return(
        <HomeContext.Provider value = {
            {
                contador,
                playing,
                playing_texto,
                incremento,
                togglePlaying,
            }
        }>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;