//ECONOVATION, ECE 151807 정회형. 2019.03.01

function multiply(splittedNum) {
    return (splittedNum[0] * splittedNum[1]);
}

function divide(splittedNum) {
    return (splittedNum[0] / splittedNum[1]);
}

function add(splittedNum) {
    return (parseInt(splittedNum[0]) + parseInt(splittedNum[1]));
}

function subtract(splittedNum) {
    return (splittedNum[0] - splittedNum[1]);
}

function calculate(splittedNum) {
    var mul = /\*/;
    var div = /\//;
    var plus = /\+/;
    var minus = /\-/;

    if (mul.exec(display.value)) {
        return multiply(splittedNum);
    }
    if (div.exec(display.value)) {
        return divide(splittedNum);
    }
    if (plus.exec(display.value)) {
        return add(splittedNum);
    }
    if (minus.exec(display.value)) {
        return subtract(splittedNum);
    }
}

function evaluateCal() {
    var display = document.getElementById('display');
    var operands = /[\*\/\+\-]/;
    var splittedNum = display.value.split(operands); // 연산자 기준으로 나눔

    if (isValid(display, splittedNum)) {
        document.getElementById('display').value = calculate(splittedNum);
    } // Valid한 경우

    if (!isNaN(splittedNum[0]) && isNaN(splittedNum[1])) {
        document.getElementById('display').value = splittedNum[0];
    } // 연산자 없이 숫자만 입력했을 경우
 }
