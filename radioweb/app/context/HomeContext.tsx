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
}