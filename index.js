
//let playBtn = document.getElementsByClassName("btn-play");

//const audio = new Audio('img/assets/audio1.wav');

//playBtn[0].addEventListener("click", (e) => {
//  audio.play();
//})

const audios = [
 "img/assets/audio1.wav",
 "img/assets/crash.wav",
 "img/assets/hit-hat.wav",
 "img/assets/redoblante.wav",
 "img/assets/tom1.wav"

];

const audio = new Audio();
let currentAudioIndex = 0;

function playCurrentAudio(){
  audio.src = audios[currentAudioIndex]; //index at zero
  audio.play();                          // calling the play method
}

function nextAudio(){
  currentAudioIndex = (currentAudioIndex +1) % audios.length;
  playCurrentAudio();
}

const button = document.getElementsByClassName('btn play')[0]; //[0] resets the audio source to the next song in the playlist when the current song ends
button.addEventListener('click', nextAudio);

