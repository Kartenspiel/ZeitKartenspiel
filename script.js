const soundCounts = Array(10).fill(0); // Zähler für die Anzahl der Abspielversuche
const maxPlays = 3; // Maximale Anzahl der Abspielversuche pro Sound

// Array mit den tatsächlichen Dateinamen der Sounds
const soundFiles = [
    'Pac-Man Waka Waka Seamless Loop.mp3', // Ersetze durch den tatsächlichen Namen
    'Microsoft Windows XP Startup Sound.mp3', // Ersetze durch den tatsächlichen Namen
    'Mario Jump Sound Effect.mp3', // Ersetze durch den tatsächlichen Namen
    'GZSZ Logo 1992.mp3', // Ersetze durch den tatsächlichen Namen
    'iMessage sound effects.mp3', // Ersetze durch den tatsächlichen Namen
    'MSN Messenger sound.mp3', // Ersetze durch den tatsächlichen Namen
    '[TAS] 3D Pinball Space Cadet (Wii) - One Mission Complete In 8.87s.mp3', // Ersetze durch den tatsächlichen Namen
    'The Pink Panther Intro.mp3', // Ersetze durch den tatsächlichen Namen
    'THX intro.mp3', // Ersetze durch den tatsächlichen Namen
    '11880 da werden sie geholfen TV Webung.mp3' // Ersetze durch den tatsächlichen Namen
];

// Funktion zum Abspielen des Sounds
function playSound(buttonNumber) {
    if (soundCounts[buttonNumber - 1] < maxPlays) {
        const audio = new Audio(`Sounds/${soundFiles[buttonNumber - 1]}`); // Pfad zur Sounddatei
        audio.play(); // Sound abspielen
        soundCounts[buttonNumber - 1]++; // Zähler erhöhen
    } else {
        alert(`Der Sound für Button ${buttonNumber} wurde bereits ${maxPlays} Mal abgespielt.`);
    }
}

// Funktion zum Zurücksetzen der Zähler
function resetCounters() {
    for (let i = 0; i < soundCounts.length; i++) {
        soundCounts[i] = 0; // Zähler zurücksetzen
    }
    alert("Die Zähler wurden zurückgesetzt."); // Bestätigung anzeigen
}