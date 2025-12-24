
let secondHand = document.querySelector('.second-hand');
let timeDisplay = document.querySelector('.time');
function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

}
setInterval(setTime, 1000);
setTime();