var [sec,min,hour]=[0,0,0];
var timer= null;
var count= 0;

function xianshi(){
    sec++;
    if(sec==60){
      sec=0;
      min++;}
    if(min== 60){
      min=0;
      hour++;
}

    let h=hour<10?"0"+hour:hour;
    let m=min<10?"0"+min:min;
    let s=sec<10?"0"+sec:sec<60?"0"+sec:sec;
    $("#showtime").innerHTML=`${h}:${m}:${s}`;
}

document.getElementById('start').addEventListener('click',()=>{
    if(timer!==null){
        cleartimererval(timer);
    }
    timer=setInterval(xianshi,10);
})

document.getElementById('pause').addEventListener('click',()=>{
    clearInterval(timer);
})

document.getElementById('reset').addEventListener('click',()=>{
    clearInterval(timer);
    [sec,min,hour] = [0,0,0];
     $("#showtime").innerHTML ='00:00:00 ';
})
