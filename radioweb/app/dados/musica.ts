type Music = {
    nome: string;
    author: string;
    description: string;
    urlAudio: string;
    image: string;
}

export const musics: Music[] = [
    {
        nome: "Havana",
        author: "Camila Cabello",
        description: "Havana - Camila Cabello",
        urlAudio: "audios/Havana.mp3",
        image: "../../imagens/Havana.jpeg"
    },
    {
        nome: "Not My Fault",
        author: "Reneé Rapp",
        description: "Not My Fault - Reneé Rapp",
        urlAudio: "audios/Not My Fault.mp3",
        image: "../../imagens/notmyfault.jpeg"
    },
    {
        nome: "Shameless",
        author: "Camila Cabello",
        description: "Shameless - Camila Cabello",
        urlAudio: "audios/Shameless.mp3",
        image: "../../imagens/shameless.jpeg"
    },
    {
        nome: "Taste",
        author: "Sabrina Carpenter",
        description: "Taste -  Sabrina Carpenter",
        urlAudio: "audios/Taste.mp3",
        image: "../../imagens/taste.jpeg"
    },
    {
        nome: "Work From Home",
        author: "Fifth Harmony",
        description: "Work From Home - Fifth Harmony",
        urlAudio: "audios/Work from Home.mp3",
        image: "../../imagens/workfromhome.jpeg"
    }
]