function add(c) {
    var input = document.getElementById('input');
    input.value += c;
}
function reset() {
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}
function typeerror() {
    alert("입력 형식이 맞지 않습니다!");
}
function calculate() {
    var input = document.getElementById('input');
    var num = input.value.split(/[\*\/\+\-]/);
    var answer = "";
    //alert(num[0]);
    //alert(num[1]);
    //alert("num0 : " + isNaN(num[0]));
    //alert("num1 : " + isNaN(num[1]));   
    if ((/[\*\/\+\-]/.exec(input.value)) && num[1] == "" || isNaN(num[0])) {
        typeerror();
    }
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
    if (!(/[\*\/\+\-]/.exec(input.value)) || num[1] != "") {
        document.getElementById('answer').value = answer;
    }
    if (!isNaN(num[0]) && isNaN(num[1])) {
        document.getElementById('answer').value = num[0];
    }
 }


//연산자 있고 두번째 숫자가 null -> 에러
//연산자 있고 두번째 숫자가 존재 -> 정상
//연산자 없고 두변째 숫자 null   -> 패스스루
//연산자 없고 두번째 숫자 존재   -> N/A