## 'while' 반복문

```while``` 반복문의 문법은 다음과 같다.

```
while (condition) {
    // 코드
    // '반복문 본문(body)'이라 불림
}
```

```condition```(조건)이 thruthy이면 반복문 본문의 코드가 실행된다.
아래 반복문은 조건 ```i < 3```을 만족할 도안 ```i```를 출력해준다.

```
let i = 0;
while (i < 3) { // 0, 1, 2 출력
    alert(i);
    i++;
}
```

```i+```가 없었다면 이론적으로 반복문이 영원히 반복되었을 것이다. 그런데 브라우저는 이런 무한 반복을 멈추게 해주는 실질적 수단을 제공한다.

반복문 조건에는 비교 뿐만 아니라 모든 종류의 표현식, 변수가 올 수 있다. 조건은 ```while```에 의해 평가되고, 평가 후에 불린값으로 변경된다.

```
let i = 3;
while(i) { // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춘다.
    alert(i);
    i--;
}
```

**본문이 한 줄이면 대괄호를 쓰지 않아도 된다**

```
let i = 3;
while (i) alert(i--);
```
## 'do..while' 반복문 

do.. while 문법을 사용하면 조건을 반복문 본문 아래로 옮길 수 있다.
```
do {
    // 반복문 본문
} while (condition);
```

이 때 본문이 먼저 실행되고, 조건을 확인한 후 조건이 thruty인 동안엔 본문이 계속 실행된다.

ex)
```
let i = 0;
do {
    alert(i);
    i++;
} while (i < 3);
```

```do..while``` 문법은 조건이 truthy인지 아닌지에 상관없이, 본문을 최소한 한 번이라도 실행하고 싶을 때만 사용해야 한다.
대다수의 상황에선 ```do..while``` 보다 ```while(...) {...}```이 적합하다.


## 'for' 반복문

for 반복문은 while 반복문보다 복잡하지만 가장 많이 쓰이는 반복문이다.
문법은 다음과 같다.
```
for (begin;condition;step) {
    // ... 반복문 본문 ...
}
```

```
for(let i = 0; i < 3; i++) { // 0, 1, 2 출력
    alert(i);
}
```

**구성요소**

* begin : 반복문에 진입할 때 단 한 번 실행
* condition : 반복마다 해당 조건이 확인된다. false면 반복문 멈춤
* body : condition이 truthy일 동안 계속해서 실행
* step : 각 반복의 body가 실행된 이후 실행


일반적인 반복문 알고리즘은 다음과 같다
```
begin을 실행함
→ (condition이 truthy이면 → body를 실행한 후, step을 실행함)
→ (condition이 truthy이면 → body를 실행한 후, step을 실행함)
→ (condition이 truthy이면 → body를 실행한 후, step을 실행함)
→ ...
```

❕ **인라인 변수 선언**

지금까지 카운터 변수 ```i```를 반복문 안에서 선언하였는데 이런 방식을 '인라인' 변수 선언이라고 한다.
이러한 변수는 반복문 안에서만 접근 가능하다.

```
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // Error: i is not defined
```

인라인 변수 선언 대신, 정의되어있는 변수를 사용할 수도 있다.

```
let i = 0;

for (i = 0; i < 3; i++) { // 기존에 정의된 변수 사용
  alert(i); // 0, 1, 2
}

alert(i); // 3, 반복문 밖에서 선언한 변수이므로 사용할 수 있음
```

## 구성 요소 생략하기

for문의 구성 요소를 생략하는 것도 가능하다.
반복문이 시작될 때 아무 것도 할 필요가 없으면 begin을 생략하는 것이 가능하다.
```
let i = 0; // i를 선언하고 값도 할당

for (; i < 3; i++) { // 'begin'이 필요하지 않기 때문에 생략
  alert( i ); // 0, 1, 2
}
```

```step``` 역시 생략 가능하다.

```
let i = 0;

for (; i < 3;) {
  alert( i++ );
}
```

모든 구성 요소를 생략할 수 있는데, 이렇게 되면 무한 반복문이 생성된다.
```
for(;;) {
    // 끊임 없는 본문 실행
}
```

for문의 구성요소를 생략할 때 주의점은 두 개의 세미콜론을 꼭 넣어줘야 한다.

## 반복문 빠져나오기

대개 반복문의 조건이 falsy가 되면 반복문이 종료된다
그런데 특별한 지시자인 break를 사용하면 언제든 원하는 때에 반복문을 빠져나오는 것이 가능하다.
```
let sum = 0;

while (true) {

  let value = +prompt("숫자를 입력하세요.", '');

  if (!value) break; // (*)

  sum += value;

}
alert( '합계: ' + sum );
```

```(*)```로 표시한 줄에 있는 ```break```는 사용자가 아무 것도 입력핮 않거나 ```cancle``` 을 눌렀을 때 활성된다.
이 때 반복문이 중단되고 제어 흐름이 반복문 아래 첫 번째 줄로 이동한다. 

반복문의 본문 가운데 혹은 본문 여러 곳에서 조건을 확인해야 하는 경우, '무한 반복문 + break' 조합을 사용하면 좋다.

## 다음 반복으로 넘어가기

```continue```는 전체 반복문을 멈추지 않는 대신에 현재 실행 중인 이터레이션을 멈추고 반복문이 다음 이터레이션을 강제로 실행시키도록 한다.(조건을 통과할 때)

```continue```는 현재 반복을 종료시키고 다음 반복으로 넘어가고 싶을 때 사용할 수 있다.

아래 예시는 ```continue```를 사용해 홀수만 출력한다.

```
for (let i = 0; i < 10; i++) {

  // 조건이 참이라면 남아있는 본문은 실행되지 않는다.
  if (i % 2 == 0) continue;

  alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
}
```

```i```가 짝수이면 ```continue```가 본문 실행을 중단시키고 다음 이터레이션이 실행되게 한다. 따라서 ```alert``` 함수는 인수가 홀수일 때 호출된다.


⚠ **'?' 오른쪽엔 ```break```나 ```continue```가 올 수 없다!**

표현식이 아닌 문법 구조는 삼항 연산자 ```?```에 사용할 수 없다는 점을 항상 유의해야한다.


## break/continue와 레이블

여러 개의 중첩 반복문을 한 번에 빠져나와야 하는 경우가 종종 생기곤 한다.
다음 예시를 살펴보자.
```
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; J++) {
        let input = prompt(`(${i},${j}의 값`,''));

        // 여기서 멈춰서 아래쪽의 '완료'가 출력되게 하려면 어떻게 해야할까?
    }
}
alert('완료');
```

input 아래에 평범한 break 지시자를 사용하면 안쪽에 있는 반복문만 빠져나올 수 있지만 이것만으로 충분치 않기 때문에 레이블을 사용해준다.

레이블은 반복문 앞에 콜론과 함께 쓰이는 식별자이다.

```
lableName: for (...) {
    ...
}
```

반복문 안에서 ```break <labelName>``` 문을 사용하면 레이블에 해당하는 반복문을 빠져나올 수 있다.

```
er: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`(${i},${j})의 값`, '');

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나온다.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
alert('완료!');
```

위 예시에서 ```break outer```는 ```outer```라는 레이블이 붙은 반복문을 찾고, 해당 반복문을 빠져나오게 해준다.
따라서 제어 흐름이 (*)에서 alert('완료')로 바로 바뀐다.
레이블을 별도의 줄에 써주는 것도 가능하다.

```
outer:
for (let i =; i < 3; i++) {...}
```

```continue``` 지시자를 레이블과 함께 사용하는 것도 가능하다. 두 가지를 같이 사용하면 레이블이 붙은 반복문의 다음 이터레이션이 실행된다.

```break```와 ```continue```는 반복문 안에서만 사용 가능하고, 레이블은 반드시 ```break```이나 ```continue``` 지시자 위에 있어야 한다.