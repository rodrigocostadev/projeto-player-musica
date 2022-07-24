// objetivos:
// criar array de objetos com as informações das musicas
// funçoes de play/pause , next, antes, lista, repeat, volume, selecionar a barra da musica
// animaçao de botoes

//criar objetos ok
// transformar em String com json
// renderizar, descompilar o objeto para selecionar atraves do array
// funçoes de play/pause , next, antes, lista, repeat, volume, selecionar a barra da musica

let img = document.getElementById("img") /* imagem de fundo album */
let tck = document.getElementById("music-name")
let at = document.getElementById("artist")
let rp = document.getElementById("repeat")
let pl = document.getElementById("playlist")
let currentMusic = document.getElementById("current-time")
let totalMusic = document.getElementById("total-duration")
let ad = document.getElementById("audio")

let n = document.getElementById("next")
let bk = document.getElementById("back")
let ply = document.getElementById("play")
let progress = document.getElementById("progress")


let music = [
    {
        image:"assets/allthesethingsihate.jpg",
        name:"All These Things I Hate",
        artist:"Bullet For My Valentine",
        file:"assets/All These Things I Hate [Revolve Around Me].mp3"
    },
    {
        image:"assets/sofaraway2.jpg",
        name:"So Far Away",
        artist:"Avenged Sevenfold",
        file:"assets/6. So Far Away.mp3",
    },
    {
        image:"assets/burnitdown.jpg",
        name:"Burn it Down",
        artist:"Linkin Park",
        file:"assets/Linkin Park   BURN IT DOWN (Official Music Audio).mp3",
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
    img.src = music[index].image
    ad.src = music[index].file
    at.innerHTML = music[index].artist
    tck.innerHTML = music[index].name
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
    ad.pause()
    ply.src = "assets/play.png"
    isPlaying = false
}

function goPlay(){
    ad.play()
    ply.src = "assets/pause.png"
    isPlaying = true
}

// function goplay(){
//     let ad = document.getElementById("audio")
//     let ply = document.getElementById("play")
//     if(ad.pause){
//         ad.play()
//         ply.src = "assets/play.png"
//     }
//     else if (ad.play){
//         ad.pause()
//         ply.src = "assets/pause.png"
//     }
// }

// function playPause(){}

//     if(pse == 0){
//     function goplay(){
//         ad.play()
//         ply.src = "assets/pause.png"
//         pse++
//     }    
// }

//     else if (pse != 0 ){
//     function gopause(){
//         ad.pause()
//         ply.src = "assets/play.png" 
//         pse--
//     }    
// }

function changeprogress(){
    ad.currentTime = progress.value / progress.max * ad.duration
    goPlay()
    ad.play()
} 

function updateprogress(){
    let porcent = Math.floor((ad.currentTime / ad.duration)*100)
    progress.value = porcent
    currentMusic.innerHTML = secondsInMinutes(Math.floor(ad.currentTime))
    totalMusic.innerHTML = secondsInMinutes(Math.floor(ad.duration))
    if(ad.currentTime == ad.duration){
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
    // if (index > ad.length ){
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
    // if (index < ad.length ){
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


n.addEventListener("click", next)
bk.addEventListener("click", back)
ply.addEventListener("click", playPause)
ad.addEventListener("timeupdate", updateprogress)
progress.addEventListener("change", changeprogress)