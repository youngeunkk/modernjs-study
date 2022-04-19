// if..else 구조를 이용해 "자바스크립트의 '공식' 이름은 무엇일까요?" 라는 질문을 하는 코드를 작성해보세요.
// 사용자가 'ECMAScript’를 입력했다면 ‘정답입니다!’, 아니라면 '모르셨나요? 정답은 ECMAScript입니다!'라는 메시지를 보여주세요.

let value = prompt("자바스크립트의 '공식'이름은 무엇일까요?", "");

if (value == "ECMAScript") {
    alert("정답입니다");
} else {
    alert("모르셨나요? 정답은 ECMAScript입니다!");
}

//if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고, 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.
let num = prompt("숫자를 입력하세요","");

if (num > 0 ) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0);
}


// 조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.

/*
let result;

if (a + b < 4) {
  result = '미만';
} else {
  result = '이상';
}
*/

let result = (a + b < 4) ? '미만' : '이상';