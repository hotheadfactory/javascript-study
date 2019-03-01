window.onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    var display = document.getElementById('display');
    display.setAttribute("readonly", true)
 
    if (key == 49 || key == 97) {
        console.log("1 pressed!");
        display.value += '1';
    }
    if (key == 50 || key == 98) {
        console.log("2 pressed!");
        display.value += '2';
    }
    if (key == 51 || key == 99) {
        console.log("3 pressed!");
        display.value += '3';
    }
    if (key == 52 || key == 100) {
        console.log("4 pressed!");
        display.value += '4';
    }
    if (key == 53 || key == 101) {
        console.log("5 pressed!");
        display.value += '5';
    }
    if (key == 54 || key == 102) {
        console.log("6 pressed!");
        display.value += '6';
    }
    if (key == 55 || key == 103) {
        console.log("7 pressed!");
        display.value += '7';
    }
    if (key == 56 || key == 104) {
        console.log("8 pressed!");
        display.value += '8';
    }
    if (key == 57 || key == 105) {
        console.log("9 pressed!");
        display.value += '9';
    }
    if (key == 106 || key == 42) {
        console.log("multiply!");
        evaluateCal();
        display.value += '*';
    }
    if (key == 107 || key == 43) {
        console.log("add!");
        evaluateCal();
        display.value += '+';
    }
    if (key == 108 || key == 44) {
        console.log("subtract!");
        evaluateCal();
        display.value += '-';
    }
    if (key == 109 || key == 45) {
        console.log("divide!");
        evaluateCal();
        display.value += '/';
    }
    if (key == 13) {
        evaluateCal();
    }
 }