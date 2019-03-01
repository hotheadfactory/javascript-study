//ECONOVATION, ECE 151807 정회형. 2019.03.01
function grabDisplay() {
    return document.getElementById('display');
}

window.onkeydown = function findKeyCode(e) {
    var pressedKey = document.querySelector(`td[data-key="${e.key}"]`);
    console.log(e.key+" Pressed");
    if (pressedKey != null) {
        pressedKey.onclick();
    }
}

function putNum(c) {
    grabDisplay().value += c; // 숫자 입력
}

function putOperand(c) {
    evaluateCal(); // 새로운 연산자를 입력할 때마다 이전 연산을 완료
    grabDisplay().value += c;
}

function resetDisplay() {
    grabDisplay().value = ""; // C/E
}

function checkCalValidity(num) {
    var operands = /[\*\/\+\-]/;
    var divide = /\//;
    var misplacedOperand = (operands.exec(grabDisplay().value)) != null && (num[0] == ""||num[1] == "") || isNaN(num[0]);
    var dividedByZero = divide.exec(grabDisplay().value) && num[1] == '0';

    if(misplacedOperand){
        alert("입력 형식이 맞지 않습니다!");
        resetDisplay();
        return false;
    }
    if(dividedByZero) {
        alert("0으로 나눌 수 없음!");
        resetDisplay();
        return false;
    }
    return true;
}

//연산자 있고 두번째 숫자가 null -> 에러
//연산자 있고 두번째 숫자가 존재 -> 정상
//연산자 없고 두변째 숫자 null   -> 패스스루
//연산자 없고 두번째 숫자 존재   -> N/A