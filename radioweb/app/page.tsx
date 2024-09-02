'use client'

import { useContext } from "react";
import {FaPlayCircle, FaPauseCircle} from "react-icons/fa";
import { HomeContext } from "./context/HomeContext";
//import Image from "next/image";

export default function Home(){
  const{
    contador,
    incremento,
    playing,
    playing_texto,
    togglePlaying
  } = useContext (HomeContext);

  return(
    <main className = "flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className = "text-[300px]"> {playing_texto}</h1>
      <button onClick = {togglePlaying}>
        {playing ? <FaPauseCircle className = "text-[400px] text-[purple]" /> :
        <FaPlayCircle className = "text-[400px] text-[purple]" />}
      </button>
    </main>
  );
}