//ECONOVATION, ECE 151807 정회형. 2019.03.01
function grabDisplay() {
    return document.getElementById('display');
}

function pressedKey(e) {
    return document.querySelector(`td[data-key="${e.key}"]`);
}

window.addEventListener('keydown', function(e) {
    console.log(e.key+" Pressed");
    if (pressedKey(e) != null) {
        pressedKey(e).onclick();
    }
});

function putNumber(c) {
    grabDisplay().value += c;
}

function putOperand(c) {
    evaluateCal();
    grabDisplay().value += c;
}

function resetDisplay() {
    grabDisplay().value = "";
}

function checkDividedByZero(num) {
    var divide = /\//;
    var dividedByZero = divide.exec(grabDisplay().value) && num[1] == '0';
    if(dividedByZero) {
        alert("0으로 나눌 수 없음!");
        resetDisplay();
        return false;
    }
    return true;
}

function doesExist(str) {
    return str.exec(grabDisplay().value);
}

function checkSplitValue(num) {
    return (num[0] == ""||num[1] == "") || isNaN(num[0]);
}

function checkCalValidity(num) {
    var misplacedOperand = doesExist(/[\*\/\+\-]/) && checkSplitValue(num);
    if(misplacedOperand){
        alert("입력 형식이 맞지 않습니다!");
        resetDisplay();
        return false;
    }
    return true;
}