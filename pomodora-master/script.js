let workTime = 25;

let seconds = "00"

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
}

// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;

    // countdown
    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            seconds = 9;
            if(workMinutes === -1){
                    setTimeout(()=>{
                        document.getElementById('minutes').innerHTML = 0;
                        document.getElementById('seconds').innerHTML = 0;
                        alert("Go Get Some Rest");
                    }, 1000);
                    workMinutes = workTime - 1;
                    breakCount++;
            }
        }
    }

    setInterval(timerFunction, 1000);
}