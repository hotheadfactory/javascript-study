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
    var a = true;
    if((/[\*\/\+\-]/.exec(input.value)) != null && (num[0] == ""||num[1] == "") || isNaN(num[0])){
        a = false;
    }
    return a;
}

function calculate() {
    var input = document.getElementById('input');
    var num = input.value.split(/[\*\/\+\-]/); // 연산자 기준으로 나눔
    var answer = ""; // 초기화
    
    if (isValid(input, num) == false || isNaN(num[0])) {
        typeError();
    } // 형식 오류 검출
    if (/\*/.exec(input.value)) {
        answer = num[0] * num[1];
    }
    if (/\//.exec(input.value)) {
        if(num[1] == '0') {
            alert("0으로 나눌 수 없음!");
        }
        if(num[1] != '0') {
            answer = num[0] / num[1];
        }
    }
    if (/\+/.exec(input.value)) {
        answer = num[0]*1 + num[1]*1;
    }
    if (/\-/.exec(input.value)) {
        answer = num[0] - num[1];
    }
    if (isValid(input, num)) {
        document.getElementById('answer').value = answer;
    } // Valid한 경우
    if (!isNaN(num[0]) && isNaN(num[1])) {
        document.getElementById('answer').value = num[0];
    } // 연산자 없이 숫자만 입력했을 경우
 }

//연산자 있고 두번째 숫자가 null -> 에러
//연산자 있고 두번째 숫자가 존재 -> 정상
//연산자 없고 두변째 숫자 null   -> 패스스루
//연산자 없고 두번째 숫자 존재   -> N/A