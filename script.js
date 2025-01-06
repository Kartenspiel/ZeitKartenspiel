function playAudio(audioElement) {
    audioElement.play();
}

function pauseAudio(audioElement) {
    audioElement.pause();
}

function replayAudio(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
}

function setVolume(audioElement, volume) {
    audioElement.volume = volume;
}