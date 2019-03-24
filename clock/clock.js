const currentTime = setInterval (setClock, 1);

let isClock = 1;
let timerStartTime = 0;
let isStopped = 0;

function expandDigit(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
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
    if(isClock == 1) {
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

    if(isClock == 0) {
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
  if(isClock == 0) {
    clearInterval(currentTime);
    isStopped = 1;
  }
  isClock = 0;
}

function resetStopWatch() {
  if(isStopped == 1) {
    window.location.reload(true);
  }
}