'use client'

import React, {createContext, ReactNode, useEffect, useState} from 'react';
import { musics } from '../dados/musica'



type HomeContextData = {
    playing: boolean;
    volume: number;
    panner: number;
    audioIndex: number;
    currentTime: number;
    totalTime: number;
    muted: boolean;
    handlePreviousMusic: () => void;
    handleNextMusic: () => void;
    configPlayPause: () => void;
    configMuted: () => void;
    configAudio: () => void;
    formatTime: (seconds: number) => string;
    configAudioIndex: (index:number) => void;
    configVolume: (valeu: number) => void;
    configPanner: (value: number) => void;
    configCurrentTime: (value: number) => void;
}

export const HomeContext = createContext({} as HomeContextData);

type ProviderProps = {
    children: ReactNode;
}

const HomeContextProvider = ({children}:ProviderProps) => {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(1);

    const [currentTime, setCurrentTime] = useState(0);
    const [muted, setMuted] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [panner, setPanner] = useState(0);
    const [audioIndex, setAudioIndex] = useState(0);
    const [audio, setAudio] = useState<HTMLAudioElement>();
    const [gain, setGain] = useState<GainNode>(); 
    const [stereo, setStereo] = useState<StereoPannerNode>();

    useEffect(()=>{
        if (audio) {
            if (playing) {
                play();
            }
            
            audio.onloadedmetadata = () => {
                setTotalTime(audio.duration);
            }
            
            audio.ontimeupdate = () => {
                setCurrentTime(audio.currentTime);
            }
            
            audio.onended = () => {
                configAudioIndex(audioIndex + 1);
            }
        }
    }, [audio]);
 
    

    const configCurrentTime = (value: number) => {
        if (!audio) return;
        audio.currentTime = value;
        setCurrentTime(value);
    }

    const formatTime = (seconds:number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
      
        return `${minutes}:${remainingSeconds.toString().padStart(2,   
       '0')}`;   
      
      }

    const configAudio = () => {
        configAudioIndex(0);
    }

    const configAudioIndex = (index: number) => {
        const newAudioIndex = index % 5;
        // alert(newAudioIndex);
        const updatedAudio = new Audio(`audios/audio${newAudioIndex + 1}.mp3`);
        pause();
        setAudioIndex(newAudioIndex);
        setAudio(updatedAudio);
        const audioConext = new AudioContext();
        const media = audioConext.createMediaElementSource(updatedAudio);
        const updatedGain = audioConext.createGain();
        const updatedStereo = audioConext.createStereoPanner();
        media.connect(updatedGain);
        updatedGain.connect(updatedStereo);
        updatedStereo.connect(audioConext.destination);
        
        updatedAudio.onplay = () => {
            audioConext.resume();
        }

        setGain(updatedGain);
        setStereo(updatedStereo);
    }

    const handleNextMusic = () => {
        configAudioIndex(audioIndex + 1); // Pass to the next track
      };
      
      const handlePreviousMusic = () => {
        // Handle previous track logic (e.g., circular wrapping)
        const prevIndex = (audioIndex - 1 + musics.length) % musics.length;
        configAudioIndex(prevIndex); // Return to the previous track
      };

    const configVolume = (value:number) => {
        if (!gain) return;
        gain.gain.value = value;
        setVolume(value);
    }

    const configMuted = () => {
        if (!audio) return;
        audio.muted = !muted;
        setMuted(!muted);
    }

    const configPanner = (value:number) => {
        if (!stereo) return;
        stereo.pan.value = value;
        setPanner(value);
    }

    const configPlayPause = () => {
        if (playing) {
            pause();
        }
        else {
            play();
        }
        setPlaying(!playing);
    }

    const play = ()=> {
        if (!audio) return;
        audio.play();
    }

    const pause = () => {
        if (!audio) return;
        audio.pause();
    }

    return (
        <HomeContext.Provider value={
            {
                playing,
                volume,
                panner,
                audioIndex,
                currentTime,
                totalTime,
                muted,
                configPlayPause,
                configAudio,
                configAudioIndex,
                configVolume,
                configPanner,
                configCurrentTime,
                configMuted,
                handleNextMusic,
                handlePreviousMusic,
                formatTime
            }
        }>
          {children} 
        </HomeContext.Provider>
    )
}

export default HomeContextProvider;