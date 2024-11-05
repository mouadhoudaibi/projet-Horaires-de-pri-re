let prayerTimes = {}; 
const adan = new Audio('495dea4f4ea5.mp3');

function updateClock() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric'
    };
    document.getElementById('date').textContent = now.toLocaleDateString('fr-FR', options);

    const hours = String(now.getHours()).padStart(2 , '0');
    const minutes = String(now.getMinutes()).padStart(2 , '0');
    const seconds = String(now.getSeconds()).padStart(2 , '0');
    document.getElementById('clock').textContent =   `${hours}:${minutes}:${seconds}`;

    if (Object.keys(prayerTimes).length > 0) {
        const currentTime = `${hours}:${minutes}`;
         if (Object.values(prayerTimes).includes(currentTime)) {
             adan.play();
         }
    }

}


async function fetchPrayerTimes() {
    const response = await  fetch('prayer.php');
    prayerTimes = await  response.json();

    document.getElementById('fajr').textContent = prayerTimes.Fajr;
    document.getElementById('duhr').textContent = prayerTimes.Dhuhr;
    document.getElementById('asr').textContent = prayerTimes.Asr;
    document.getElementById('maghrib').textContent = prayerTimes.Maghrib;
    document.getElementById('isha').textContent = prayerTimes.Isha; 

}

setInterval(updateClock, 1000)
fetchPrayerTimes();
