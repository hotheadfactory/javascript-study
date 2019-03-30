const currentTime = setInterval (setClock, 1);

let isClock = true;
let timerStartTime = 0;
let isStopped = false;
let hour = 0, minute = 0, second = 0, milisec = 0;
let ampm = "AM";

function expandDigit(num, digit) {
  num = String(num);
  return num.length >= digit ? num : new Array(digit - num.length + 1).join('0') + num;
}

function setClock() {
  var nowday = new Date();
  nowday = nowday.getTime()+32400000;// GMT+9
  checkAMPM(nowday);
  setDisplay(nowday);
}

function checkAMPM(nowday) {
  hour = Math.floor((nowday / (1000*60*60)) % 24);
  if(isClock) {
    if(hour == 12) {
      ampm = "PM";
    }
    if (hour == 0) {
      hour = 12;
      ampm = "AM";
    }
    if (hour > 12) {
      hour = hour-12;
      ampm = "PM";
    }
  }
  if(!isClock) {
    ampm = "ST";
    nowday -= timerStartTime;
    hour = Math.floor((nowday / (1000*60*60)) % 24);
  }
  minute = Math.floor((nowday / (1000*60)) % 60);//minute
  second = Math.floor((nowday / 1000) % 60);//second
  milisec = Math.floor(nowday % 1000);// miliseconds
}

function setDisplay(nowday) {
    document.getElementById("ddayTimer").innerHTML = "<br>";
    document.getElementById("timeAmpm").innerHTML = ampm+" ";
    document.getElementById("hour").innerHTML = expandDigit(hour, 2);
    document.getElementById("minute").innerHTML = expandDigit(minute, 2);
    document.getElementById("second").innerHTML = expandDigit(second, 2);
    document.getElementById("miliseconds").innerHTML = expandDigit(milisec, 3);
}

function startStopWatch() {
  var time = new Date();
  time = time.getTime()+32400000;
  timerStartTime = time;
  if(!isClock) {
    clearInterval(currentTime);
    isStopped = true;
  }
  isClock = false;
}

function resetStopWatch() {
  if(isStopped) {
    window.location.reload(true);
  }
}