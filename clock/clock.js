var ddaytimer = setInterval (dayGap, 1);

function dayGap () {
    var nowday = new Date();
    nowday = nowday.getTime()+32400000;//밀리세컨드 단위변환, GMT+9
    var d = 0, d1 = 0, d2 = 0, d3 = 0, h = 0, h1 = 0, h2 = 0, m1 = 0, m2 = 0, s1 = 0, s2 = 0, ms1 = 0, ms2 = 0, ms3 = 0;
    var ampm = "AM";

    h = Math.floor((nowday / (1000*60*60)) % 24);
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
        document.getElementById("csat2020").style.backgroundImage = "url(sky.jpg)";
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
  var nowday = new Date();
}

function playAudio(audio) {
  var audio = new Audio();
  audio.src = './happysky.mp3';
  audio.currentTime = 0;
  audio.addEventListener('ended',function(){this.currentTime=0;this.play();},false);
  var playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
}