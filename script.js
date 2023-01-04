// objetivos:
// criar array de objetos com as informações das musicas
// funçoes de play/pause , next, antes, lista, repeat, volume, selecionar a barra da musica
// animaçao de botoes

//criar objetos ok
// transformar em String com json
// renderizar, descompilar o objeto para selecionar atraves do array
// funçoes de play/pause , next, antes, lista, repeat, volume, selecionar a barra da musica

let image = document.getElementById("img") /* imagem de fundo album */
let track = document.getElementById("music-name")
let artistt = document.getElementById("artist")
// let rp = document.getElementById("repeat")
let volumee = document.getElementById("volume")
let playlistt = document.getElementById("playlist")
let currentMusic = document.getElementById("current-time")
let totalMusic = document.getElementById("total-duration")
let audio = document.getElementById("audio")

let nextt = document.getElementById("next")
let backk = document.getElementById("back")
let play = document.getElementById("play")
let progress = document.getElementById("progress")
let divvolume = document.getElementById("modalvolume")
let volumeinput = document.getElementById("volumeinput")


let music = [
    {
        image:"assets/burnitdown.jpg",
        name:"Burn it Down",
        artist:"Linkin Park",
        file:"assets/Linkin Park   BURN IT DOWN (Official Music Audio).mp3",
    },
    {
        image:"assets/sofaraway2.jpg",
        name:"So Far Away",
        artist:"Avenged Sevenfold",
        file:"assets/6. So Far Away.mp3",
    },
    {
        image:"assets/allthesethingsihate.jpg",
        name:"All These Things I Hate",
        artist:"Bullet For My Valentine",
        file:"assets/All These Things I Hate [Revolve Around Me].mp3"
    },
    {
        image:"assets/buriedalive2.jpg",
        name:"Buried Alive",
        artist:"Avenged Sevenfold",
        file:"assets/4. Buried Alive.mp3",
    },
    {
        image:"assets/mycurse.jpg",
        name:"My Curse",
        artist:"Killswicth Engage",
        file:"assets/Killswitch Engage   My Curse [OFFICIAL AUDIO].mp3",
    },
    {
        image:"assets/hailtotheking.jpg",
        name:"Hail to the king",
        artist:"Avenged Sevenfold",
        file:"assets/Hail To The King.mp3",
    },
    {
        image:"assets/mylastserenade.jpg",
        name:"My Last Serenade",
        artist:"Killswicth Engage",
        file:"assets/Killswitch Engage   My Last Serenade [OFFICIAL AUDIO].mp3",
    },
    {
        image:"assets/nightmare2.jpg",
        name:"Nightmare",
        artist:"Avenged Sevenfold",
        file:"assets/1. Nightmare.mp3",
    },
]

let index = 0;

console.log(music)

function render(){
    image.src = music[index].image
    audio.src = music[index].file
    artistt.innerHTML = music[index].artist
    track.innerHTML = music[index].name
    // audio.volume = volumeinput.value
}
render()

let isPlaying = false

function playPause(){
    isPlaying ? goPause() : goPlay()
    
    // if (isPlaying == true) {
    //     goPause()
    // }
    // else{
    //     goPlay()
    // }
}

function goPause(){
    audio.pause()
    play.src = "assets/play.png"
    isPlaying = false
}

function goPlay(){
    audio.play()
    play.src = "assets/pause.png"
    isPlaying = true
}

// function goplay(){
//     let audio = document.getElementById("audio")
//     let play = document.getElementById("play")
//     if(audio.pause){
//         audio.play()
//         play.src = "assets/play.png"
//     }
//     else if (audio.play){
//         audio.pause()
//         play.src = "assets/pause.png"
//     }
// }

// function playPause(){}

//     if(pse == 0){
//     function goplay(){
//         audio.play()
//         play.src = "assets/pause.png"
//         pse++
//     }    
// }

//     else if (pse != 0 ){
//     function gopause(){
//         audio.pause()
//         play.src = "assets/play.png" 
//         pse--
//     }    
// }

function changeprogress(){
    audio.currentTime = progress.value / progress.max * audio.duration
    goPlay()
    audio.play()
} 

function updateprogress(){
    let porcent = Math.floor((audio.currentTime / audio.duration)*100)
    progress.value = porcent
    currentMusic.innerHTML = secondsInMinutes(Math.floor(audio.currentTime))
    totalMusic.innerHTML = secondsInMinutes(Math.floor(audio.duration))
    if(audio.currentTime == audio.duration){
        next()
    }
}

function secondsInMinutes(second){
    let minutes= Math.floor(second/60)
    let seconds = second % 60
    if (seconds < 10){
        seconds = "0" + seconds
    }
    return minutes + ":" + seconds
}

function next (){
    index ++
    // if (index > audio.length ){
    //     index = 0 }
    //     render()
    //     goPlay()    
    
    if(index > music.length /* music.length - 1 */){
        index = 0
    }
    render()
    goPlay()
}
function back (){
    index --
    // if (index < audio.length ){
    //     index = 0
    // }
    //     render()
    //     goPlay()

    if(index <= 0){
        index = music.length - 1
    }
    render()
    goPlay()
}
function volume(){
    
    volumeinput.onchange = function(){
        console.log(volumeinput.value)
    }
    divvolume.style.display = "block"

}
divvolume.onchange = function(){   
    divvolume.style.display = "none"
    audio.volume = (volumeinput.value / 100) 
    //divide por 100 pois o volume do audio aceita valor de 
    //0,00 até 1,00 e os valores do input vão de o a 100 (esse ultimo definido por mim)
}

volumee.addEventListener("click",volume)
nextt.addEventListener("click", next)
backk.addEventListener("click", back)
play.addEventListener("click", playPause)
audio.addEventListener("timeupdate", updateprogress)
progress.addEventListener("change", changeprogress)