'use client'

import Image from "next/image";
import { HomeContext } from "./context/HomeContext";
import { useContext } from "react";
import { FaCirclePlay} from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { musics } from "./dados/musica";

export default function Home() {
  const context = useContext(HomeContext);

  if (!context) {
    return <div>helooooooooo</div>;
  }

  const {
    playing, configPlayPause,
    nomeMusica, passarMusica, voltarMusica,
    selecionarMusica

  } = context;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[60px]">{nomeMusica}</h1>
        <div className="flex items-center">
          <button onClick={() => voltarMusica()}>
            <GiPreviousButton className="text-[80px]"/>
          </button>
          <button onClick={() => configPlayPause()}>
            {playing ? <FaPauseCircle className="text-[80px]"/> : <FaCirclePlay className="text-[80px]"/>}
          </button>
          <button onClick={() => passarMusica()}>
            <GiNextButton className="text-[80px]"/>
          </button>
        </div>
        <div className="flex flex-col items-center">
          {musics.map((music, i) => (
            <button onClick={() => selecionarMusica(i)}>
              <div key={i} className="hover:bg-blue-400">
                <p className="text-[15px]">{music.nome}</p>
                <p className="text-[10px]">{music.author}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}