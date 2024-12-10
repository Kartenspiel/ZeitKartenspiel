const soundCounts = Array(10).fill(0);
const maxPlays = 3;

function playSound(buttonNumber) {
    if (soundCounts[buttonNumber - 1] < maxPlays) {
        const audio = new Audio(`sound${buttonNumber}.mp3`);
        audio.play();
        soundCounts[buttonNumber - 1]++;
    } else {
        alert(`Der Sound für Button ${buttonNumber} wurde bereits ${maxPlays} Mal abgespielt.`);
    }
}

function resetCounters() {
    for (let i = 0; i < soundCounts.length; i++) {
        soundCounts[i] = 0;
    }
    alert("Die Zähler wurden zurückgesetzt.");
}