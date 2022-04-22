# 함수 표현식

자바스크립트는 함수를 특별한 종류의 값으로 취급한다. 다른 언어에서처럼 "특별한 동작을 하는 구조"로 취급되지 않는다.

함수 표현식을 사용해서 함수를 만들 수 있다.

ex)
```
let sayHi = function() {
    alert("hello");
};
```
함수를 생성하고 변수에 값을 할당하는 것처럼 함수가 변수에 할당되었다. 
위 예시에서는 함수가 변수 ```sayHi```에 저장된 값이 되었다.
함수는 값이기 때문에 ```alert```를 이용하여 함수 코드를 출력할 수도 있다.

```
function sayHi() {
    alert("hello");
}

alert(sayHi); // 함수 코드가 보임
```

마지막 줄에서 ```sayHi``` 옆에 괄호가 없기 때문에 함수는 실행되지 않는다. 어떤 언어에선 괄호 없이 함수 이륾만 언급해도 함수가 실행되지만 자바스크립트는 괄호가 있어야만 함수가 호출된다.
자바스크립트에서 함수는 값이다. 따라서 함수를 값처럼 취급할 수 있다. 위 코드에선 함수 소스 코드가 문자형으로 바뀌어 출력되었다. 
함수는 ```sayHi()```처럼 호출할 수 있다는 점 때문에 일반적인 값과는 조금 다르다. 
그 본질은 값이기 때문에 값에 할 수 있는 일을 함수에도 할 수 있다.
변수를 복사해 다른 변수에 할당하는 것처럼 함수를 복사해 다른 변수에 할당할 수도 있다.

```
function sayHi() { // (1) 함수 생성
    alert("hello");
}

let func = sayHi; // (2) 함수 복사

func(); // hello // (3) 복사한 함수를 실행 
sayHi(); // hello // 본래 함수도 정상적으로 실행
```

1. (1)에서 함수 선언 방식을 이용해 함수를 생선한다. 생성한 함수는 ```sayHi```라는 변수에 저장된다.
2. (2)에선 ```sayHi```를 새로운 변수 ```func```에 복사하낟. 이 때 ```sayHi``` 다음에 괄호가 없다는 점에 유의해야한다. ```func = sayHi()```가 되어 ```sayHi``` 함수 그 자체가 아니라, 함수 호출 결과(함수의 반환 값)가 ```func```에 저장되었을 것이다.
3. 이젠 ```sayHi()```와 ```func()```로 함수를 호출할 수 있게 되었다.

함수 ```sayHi```는 아래와 같이 함수 표현식을 사용해 정의할 수 있게 되었다.

```
let sayHi = fnction() {
    alert("hello");
};

let func = sayHi;
```

❕**끝에 세미콜론은 왜 있나요?**

함수 표현식은 구문 안에서 값의 역할을 한다. 코드 블록이 아니고 값처럼 취급되어 변수에 할당되므로 모든 구문의 끝엔 세미콜론```;```을 붙이는 것이 좋다. 함수 표현식에 쓰인 세미콜론은 함수 표현식 때문에 붙여진 게 아니라, 구문의 끝이기 때문에 붙여졌다.

## 콜백 함수

함수를 값처럼 전달하는 예시, 함수 표현식에 관한 예시를 좀 더 살펴보겠다.
매개변수가 3개 있는 함수, ```ask(question, yes, no)```를 작성해보겠다. 각 매개변수에 대한 설명은 아래와 같ㅌ다.

```question``` 질문
```yes``` "Yes"라고 답한 경우 실행되는 함수
```no``` "no"라고 답한 경우 실행되는 함수

함수는 반드시 ```question(질문)```을 해야하고, 사용자의 답변에 따라 ```yes()```나 ```no()```를 호출한다.

```
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("동의하였습니다.");
}

function showCancel() {
    alert("취소 버튼을 누르셨습니다.");
}

// 사용법: 함수 showOk와 showCancel가 ask 함수의 인자로 전달됨
ask("동의하십니까?", showOk, showCancel);
```

**함수 ```ask```의 인수, ```showOk```와 ```showCancel```은 콜백 함수 또는 콜백이라고 불린다.**

함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출" 하는 것이 콜백 함수의 개념이다. 위 예시에선 사용자가 "yes"라고 답한 경우 ```showOk```가 콜백 되고, "no" 라고 대답한 경우 ```showCancle```가 콜백 된다.

아래와 같이 함수 표현식을 사용하면 코드 길이가 짧아진다.

```
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "동의하십니까?",
    function() { alert("동의하셨습니다.");},
    function() { alert("취소 버튼을 누르셨습니다.");}
);
```

```ask(...)``` 안에 함수가 선언되었는데 이렇게 이름 없이 선언한 함수는 익명함수라고 부른다. 익명함수는 ```ask``` 바깥에서는 접근할 수 없다.(변수에 할당된 게 아니기 때문에) 위 예시는 의도를 가지고 이렇게 구현하였기 때문에 바깥에서 접근할 수 없어도 문제가 없다.

❕**함수는 "동작"을 나타내는 값이다.**

문자열이나 숫자 등의 일반적인 값들은 데이터를 나타낸다.
함수는 하나의 **동작**을 나타낸다.
동작을 대변하는 값인 함수를 변수 간 전달하고, 동작이 필요할 때 이 값을 실행할 수 있다.

## 함수 표현식 vs 함수 선언문

**함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성한다. 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있다.**

**반면에 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있다**

따라서 전역 함수 선언문은 스크립트 어디에 있느냐에 상관없이 어디에서든 사용할 수 있다. 이게 가능한 이유는 자바스크립트 내부 알고리즘 때문이다. 자바스크립트는 스크립트를 실행하기 전, 준비단계에서 전역에 선언된 함수 선언문을 찾고, 해당 함수를 생성한다. 스크립트가 진짜 실행되기 전 "초기화 단계"에서 함수 선언 방식으로 정의한 함수가 생성되는 것이다.

스크립트는 함수 선언문이 모두 처리된 이후에서야 실행된다. 따라서 스크립트 어디서든 함수 선언문으로 선언한 함수에 접근할 수 있는 것이다.

❕❕**함수 선언문과 함수 표현식 중 무엇을 선택해야 하나요?**

함수를 선언하는 걸 먼저 고려하는 것이 좋다. 함수 선언문으로 함수를 정의하면, 함수가 선언되기 전에 호출할 수 있어서 코드 구성을 좀 더 자유롭게 할 수 있다.
또한 가독성도 좋아진다.
그러나 어떤 이유로 함수 선언 방식이 적합하지 않거나, 조건에 따라 함수를 선언해야 한다면 함수 표현식을 사용해야 한다.
