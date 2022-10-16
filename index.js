function countDown(){
    //taking this time and turning into ms
    const dateTime = new Date("September 8, 2022 19:30:00").getTime();
    const now = new Date().getTime();
    const gap = dateTime - now;

    //calculating the time in ms now
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //need to calculate the gap to time
    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector(".day").innerText = textDay
    document.querySelector(".hours").innerText = textHour
    document.querySelector(".minute").innerText = textMinute
    document.querySelector(".seconds").innerText = textSecond
    
    
}
setInterval(countDown,1000)

countDown()