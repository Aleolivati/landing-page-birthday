const eventDate = new Date("May 10, 2024 07:41:00") ;
const eventTimeStamp = eventDate.getTime() ;

const timeCounter = setInterval(function () {
    const timeNow = new Date() ;
    const timeNowTimeStamp = timeNow.getTime() ;
    const timeUntilEvent = eventTimeStamp - timeNowTimeStamp ;

    const perDays = 1000 * 60 * 60 * 24 ;
    const perHours = 1000 * 60 * 60 ;
    const perMinutes = 1000 * 60 ;

    const daysUntilEvent = Math.floor(timeUntilEvent / perDays) ;
    const hoursUntilEvent = Math.floor((timeUntilEvent % perDays) / perHours) ;
    const minutesUntilEvent = Math.floor((timeUntilEvent % perHours) / perMinutes) ;
    const secondsUntilEvent = Math.floor((timeUntilEvent % perMinutes) / 1000) ;

    const timeCounter = document.getElementById('time-counter') ;
    const textToTime = document.getElementById('text-to-time') ;

    textToTime.innerHTML = `Time left: <br>` ;
    timeCounter.innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s` ;

    if (timeUntilEvent < 0) {
        clearInterval(timeCounter) ;
        timeCounter.innerHTML = "Now I'm 34!!!" ;
        textToTime.innerHTML = `<br>` ;
    }
},1000)