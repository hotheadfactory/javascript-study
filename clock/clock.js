const currentTime = setInterval (setClock, 1);

let isClock = true;
let timerStartTime = 0;
let isStopped = false;

function expandDigit(num, digit) {
  num = num + '';
  return num.length >= digit ? num : new Array(digit - num.length + 1).join('0') + num;
}

function setClock() {
  var nowday = new Date();
  nowday = nowday.getTime()+32400000;// GMT+9
  setDisplay(nowday);
}

function setDisplay(nowday) {
    var h = 0, m = 0, s = 0, ms = 0;
    var ampm = "AM";
    h = Math.floor((nowday / (1000*60*60)) % 24);
    if(isClock) {
      if(h == 12) {
        ampm = "PM";
      }
      if (h == 0) {
        h = 12;
        ampm = "AM";
      }
      if (h > 12) {
        h = h-12;
        ampm = "PM";
      }
    }

    if(!isClock) {
      ampm = "ST";
      nowday -= timerStartTime;
      h = Math.floor((nowday / (1000*60*60)) % 24);
    }
    m = Math.floor((nowday / (1000*60)) % 60);//minute
    s = Math.floor((nowday / 1000) % 60);//second
    ms = Math.floor(nowday % 1000);// miliseconds
    document.getElementById("ddayTimer").innerHTML = "<br>";
    document.getElementById("timeAmpm").innerHTML = ampm+" ";
    document.getElementById("hour").innerHTML = expandDigit(h, 2);
    document.getElementById("minute").innerHTML = expandDigit(m, 2);
    document.getElementById("second").innerHTML = expandDigit(s, 2);
    document.getElementById("miliseconds").innerHTML = expandDigit(ms, 3);
}

function stopWatch() {
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