
let secondHand = document.querySelector('.second-hand');
let timeDisplay = document.querySelector('.time');
function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


}
setInterval(setTime, 1000);
setTime();