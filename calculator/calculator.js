function numIn(c) {
    var display = document.getElementById('display');
    display.value += c; // 숫자 입력
}
function operandIn(c) {
    evaluateCal(); // 새로운 연산자를 입력할 때마다 이전 연산을 완료
    var display = document.getElementById('display');
    display.value += c;
}
function resetDisplay() {
    document.getElementById('display').value = ""; // C/E
}



function typeError() {
    alert("입력 형식이 맞지 않습니다!");
}
function isValid(display, num) {
    if((/[\*\/\+\-]/.exec(display.value)) != null && (num[0] == ""||num[1] == "") || isNaN(num[0])){
        return false;
    }
    return true;
}



function multiply(splittedNum) {
    return (splittedNum[0] * splittedNum[1]);
}

function divide(splittedNum) {
    if(splittedNum[1] == '0') {
        alert("0으로 나눌 수 없음!");
        return 0;
    }
    if(splittedNum[1] != '0') {
        return (splittedNum[0] / splittedNum[1]);
    }calculate
}

function add(splittedNum) {
    return (parseInt(splittedNum[0]) + parseInt(splittedNum[1]));
}

function subtract(splittedNum) {
    return (splittedNum[0] - splittedNum[1]);
}

function calculate(splittedNum) {
    var display = document.getElementById('display');
    if (/\*/.exec(display.value)) {
        return multiply(splittedNum);
    }
    if (/\//.exec(display.value)) {
        return divide(splittedNum);
    }
    if (/\+/.exec(display.value)) {
        return add(splittedNum);
    }
    if (/\-/.exec(display.value)) {
        return subtract(splittedNum);
    }
}
//이상 연산식들



function evaluateCal() {
    var display = document.getElementById('display');
    var splittedNum = display.value.split(/[\*\/\+\-]/); // 연산자 기준으로 나눔
    var answer = ""; // 초기화
  
    if (isValid(display, splittedNum) == false || isNaN(splittedNum[0])) {
        typeError();
    } // 형식 오류 검출
    if (isValid(display, splittedNum)) {
        document.getElementById('display').value = calculate(splittedNum);
    } // Valid한 경우
    if (!isNaN(splittedNum[0]) && isNaN(splittedNum[1])) {
        document.getElementById('display').value = splittedNum[0];
    } // 연산자 없이 숫자만 입력했을 경우
 }

//연산자 있고 두번째 숫자가 null -> 에러
//연산자 있고 두번째 숫자가 존재 -> 정상
//연산자 없고 두변째 숫자 null   -> 패스스루
//연산자 없고 두번째 숫자 존재   -> N/A