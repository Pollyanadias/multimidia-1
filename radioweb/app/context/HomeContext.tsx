import {createContext} from 'react'

type HomeContextData = {
    contador: number;
    incremento: () => void;
}

export const HomeContext = createContext({} as HomeContextData);