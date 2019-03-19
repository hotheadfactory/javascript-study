const currentTime = setInterval (setClock, 1);

var isClock = 1;
var timerStartTime = 0;
var isStopped = 0;

function setClock() {
  var nowday = new Date();
  nowday = nowday.getTime()+32400000;// GMT+9
  setDisplay(nowday);
}

function setDisplay(nowday) {
    var d = 0, d1 = 0, d2 = 0, d3 = 0, h = 0, h1 = 0, h2 = 0, m1 = 0, m2 = 0, s1 = 0, s2 = 0, ms1 = 0, ms2 = 0, ms3 = 0;
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

    h1 = Math.floor(h / 10);//10h
    h2 = h % 10;//1h
    m1 = Math.floor(((nowday / (1000*60)) % 60) / 10);//10m
    m2 = Math.floor(((nowday / (1000*60)) % 60) % 10);//1m
    s1 = Math.floor(((nowday / 1000) % 60) / 10);//10s
    s2 = Math.floor(((nowday / 1000) % 60) % 10);//1s
    ms1 = Math.floor((nowday % 1000)/100);//1/10s
    ms2 = Math.floor((nowday % 100)/10);//1/100s
    ms3 = Math.floor(nowday % 10);//milisec
    document.getElementById("dday-timer").innerHTML = "<br>";
    document.getElementById("time-ampm").innerHTML = ampm+" ";
    document.getElementById("time-hr1").innerHTML = h1;
    document.getElementById("time-hr2").innerHTML = h2;
    document.getElementById("time-min1").innerHTML = m1;
    document.getElementById("time-min2").innerHTML = m2;
    document.getElementById("time-sec1").innerHTML = s1;
    document.getElementById("time-sec2").innerHTML = s2;
    document.getElementById("time-mili1").innerHTML = ms1;
    document.getElementById("time-mili2").innerHTML = ms2;
    document.getElementById("time-mili3").innerHTML = ms3;
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