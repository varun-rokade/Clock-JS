setInterval(setclock,1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondshand = document.querySelector('[data-second-hand]')

function setclock()
{
    const currentdate = new Date();
    const secondRatio = currentdate.getSeconds() / 60
    const minuteRatio = (secondRatio+currentdate.getMinutes()) / 60
    const hourRatio = (minuteRatio+currentdate.getHours()) / 12

    setRotation(secondshand,secondRatio)
    setRotation(minutehand,minuteRatio)
    setRotation(hourhand,hourRatio)
    
}

function setRotation(element , rotationRatio)
{
    element.style.setProperty('--rotation',rotationRatio * 360)
}

setclock();