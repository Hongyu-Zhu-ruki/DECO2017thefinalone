var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');






//store a reference to a timer variable
var timeStart;

start.addEventListener('click', function(){
    if(timeStart === undefined){
        timeStart = setInterval(timer, 1000)
    } else {
        alert("Timer has already started");
    }
})

reset.addEventListener('click', function(){
    workmin.innerText = 25;
    shortbreakmin.innerText = 5;
    lbm.innerText = 15;
    stopInterval()
    timeStart = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    timeStart = undefined;
})


//Start Timer Function
function timer(){
  var hyz_hour = document.getElementById('hyz_hour').value;

var hyz_minutes = document.getElementById('hyz_minutes').value;
var hyz_second = document.getElementById('hyz_second').value;
    //Work Timer Countdown时钟-1
     if(hyz_hour != 0 && hyz_minutes == 0){
        hyz_minutes = 59;
         document.getElementById("hyz_hour").value=hyz_hour-1;
    }

    //Break Timer Countdown分钟-1
    if( hyz_second == 0){
      hyz_second = 59;
      document.getElementById("hyz_minutes").value=hyz_minutes-1;
    }
    if(hyz_second!=0){
      document.getElementById("hyz_second").value=hyz_second-1;
      //hyz_second=hyz_second-1;
    }
    if(hyz_hour==0&&hyz_minutes==0&&hyz_second==0){
      alert("time up!!!")
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(timeStart);
}

