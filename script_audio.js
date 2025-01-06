// Funktionen zum Steuern des Audio-Players
function playAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
}

function pauseAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
}

function replayAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.currentTime = 0;
    audioPlayer.play();
}

function setVolume() {
    const audioPlayer = document.getElementById('audioPlayer');
    const volumeControl = document.getElementById('volumeControl');
    audioPlayer.volume = volumeControl.value;
}