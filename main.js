console.log("Java Script is Working, thank god");

let songIndex = 0;
let audioElement = new Audio('songs/offshore.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
audioElement.play();
let songs = [{
        songName: "Offshore",
        filePath: "songs/offshore.mp3"
    },
    {
        songName: "Offshore",
        filePath: "songs/Alan Walker Type Beat.mp3"
    },
    {
        songName: "Offshore",
        filePath: "songs/Alan Walker Type Beat2.mp3"
    },
    {
        songName: "Offshore",
        filePath: "songs/First EDM.mp3"
    },
    {
        songName: "Offshore",
        filePath: "songs/House Music Test.mp3"
    },
    {
        songName: "Offshore",
        filePath: "songs/Play Remake.mp3"
    },
    {
        songName: "Offshore",
        filePath: "songs/untitled edm.mp3"
    },
]

songItems.forEach((element, i) => {

})

// audioElement.play();

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        masterSongName.innerText = songs[songIndex].songName;
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >=6) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    masterSongName.innerText = songs[songIndex].songName;
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 6;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    masterSongName.innerText = songs[songIndex].songName;
})