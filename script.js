const soundCounts = Array(10).fill(0);
const maxPlays = 3;

// SOUNDARRAY
const soundFiles = [
        'Pac-Man Waka Waka Seamless Loop.mp3',
        'Mario Jump Sound Effect.mp3',
        'Microsoft Windows XP Startup Sound.mp3',
        'THX intro.mp3',
        'The Pink Panther Intro.mp3',
        'MSN Messenger sound.mp3',
        '[TAS] 3D Pinball Space Cadet (Wii) - One Mission Complete In 8.87s.mp3',
        'NOKIA RINGTONE [1994].mp3',
        'Upps! Die Pannenshow Intro.mp3',
        'GZSZ Logo 1992.mp3'


    ]
    // Pllay
function playSound(buttonNumber) {
    if (soundCounts[buttonNumber - 1] < maxPlays) {
        const audio = new Audio(`Sounds/${soundFiles[buttonNumber - 1]}`);
        audio.play();
        soundCounts[buttonNumber - 1]++;
    } else {
        alert(`Der Sound für Button ${buttonNumber} wurde bereits ${maxPlays} Mal abgespielt.`);
    }
}

// Reset
function resetCounters() {
    for (let i = 0; i < soundCounts.length; i++) {
        soundCounts[i] = 0;
    }
    alert("Die Zähler wurden zurückgesetzt.");
}