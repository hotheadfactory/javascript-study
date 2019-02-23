function charIn(c) {
    var input = document.getElementById('input');
    input.value += c;
}
function resetInput() {
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}
function typeError() {
    alert("입력 형식이 맞지 않습니다!");
}

function isValid(input, num) {
    if((/[\*\/\+\-]/.exec(input.value)) != null && (num[0] == ""||num[1] == "") || isNaN(num[0])){
        return false;
    }
    return true;
}

function multiply(splittedNum) {
    answer = splittedNum[0] * splittedNum[1];
    return answer;
}

function divide(splittedNum) {
    if(splittedNum[1] == '0') {
        alert("0으로 나눌 수 없음!");
        answer = 0;
    }
    if(splittedNum[1] != '0') {
        answer = splittedNum[0] / splittedNum[1];
    }
    return answer;
}

function add(splittedNum) {
    answer = splittedNum[0]*1 + splittedNum[1]*1;
    return answer;
}

function subtract(splittedNum) {
    answer = splittedNum[0] - splittedNum[1];
    return answer;
}

function calculate() {
    var input = document.getElementById('input');
    var splittedNum = input.value.split(/[\*\/\+\-]/); // 연산자 기준으로 나눔
    var answer = ""; // 초기화
    
    if (isValid(input, splittedNum) == false || isNaN(splittedNum[0])) {
        typeError();
    } // 형식 오류 검출
    if (/\*/.exec(input.value)) {
        answer = multiply(splittedNum);
    }
    if (/\//.exec(input.value)) {
        answer = divide(splittedNum);
    }
    if (/\+/.exec(input.value)) {
        answer = add(splittedNum);
    }
    if (/\-/.exec(input.value)) {
        answer = subtract(splittedNum);
    }
    if (isValid(input, splittedNum)) {
        document.getElementById('answer').value = answer;
    } // Valid한 경우
    if (!isNaN(splittedNum[0]) && isNaN(splittedNum[1])) {
        document.getElementById('answer').value = splittedNum[0];
    } // 연산자 없이 숫자만 입력했을 경우
 }

//연산자 있고 두번째 숫자가 null -> 에러
//연산자 있고 두번째 숫자가 존재 -> 정상
//연산자 없고 두변째 숫자 null   -> 패스스루
//연산자 없고 두번째 숫자 존재   -> N/A
