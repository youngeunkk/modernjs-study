## 함수

스크립트를 작성하다 보면 유사한 동작을 하는 코드가 여러 곳에서 필요할 때가 많다.
사용자가 로그인이나 로그아웃을 했을 때 안내 메시지를 보여주는 동작 같은 경우가 예이다.
함수는 프로그램을 구성하는 주요 '구성 요소'이다. 함수를 이용하면 중복 없이 유사한 동작을 하는 코드를 여러 번 호출할 수 있다.

## 함수 선언

함수 선언 방식을 이용하면 함수를 만들 수 있다.
아래와 같이 작성할 수 있다.
```
function showMessage() {
    alert('안녕하세요!');
}
```

```function``` 키워드, 함수 이름, 괄호로 둘러싼 매개변수를 차례로 써주면 함수를 선언할 수 있다. 위 함수에는 매개변수가 없는데, 만약 매개변수가 여러 개 있다면 각 매개변수를 콤마로 구분한다.

```
function name(parameters) {
    ...함수 본문...
}
```

새롭게 정의한 함수는 함수 이름 옆에 괄호를 붙여 호출할 수 있다.
마치 ```showMessage()``` 같이 말이다.

ex)
```
function showMessage() {
    alert('안녕!');
}
showMessage();
```
```showMessage();```로 함수를 호출하면 함수 본문이 실행된다.
함수의 주요 용도 중 하나는 중복 코드 피하기이다.
얼럿 창에 보여줄 메시지를 바꾸거나 메시지를 보여주는 방식 자체를 변경하고 싶다면, 함수 본문 중 출력에 관여하는 코드 딱 하나만 수정해주면 된다.

## 지역 변수
함수 내에서 선언한 변수인 지역 변수는 함수 안에서만 접근 가능하다.

ex)
```
function showMessage() {
    let message = "안녕하세요!"; // 지역변수
    alert(message);
}
showMessage(); // 안녕하세요!

alert(message); // message는 함수 내 지역 변수이기 때문에 에러 발생
```

## 외부 변수
함수 내부에서 함수 외부의 변수인 외부 변수에 접근할 수 있다.

```
let userName = 'youngeun';

function showMessage() {
    let message = 'hello, ' + userName;
    alert(message);
}
showMessage(); // hello, youngeun
```

함수에선 외부 변수에 접근하는 것뿐마나 아니라, 수정도 가능하다.

```
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) 외부 변수를 수정함

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // 함수 호출 전이므로 John 이 출력됨

showMessage();

alert( userName ); // 함수에 의해 Bob 으로 값이 바뀜
```

외부 변수는 지역 변수가 없는 경우에만 사용할 수 있다.

```
let userName = 'youngeun';

function showMessage() {
    let userName = "Bob"; // 같은 이름을 가진 지역 변수 선언

    let message = 'hello, ' + userName; // Bob
    alert(message);
}

// 함수는 내부 변수인 userName만 사용합니다
showMessage();

alert(userName); // 함수는 외부 변수에 접근하지 않으므로 값이 변경되지 않고, youngeun 출력
```

😉 **전역 변수**

위 예시의 ```userName```처럼, 함수 외부에 선언된 변수는 전역 변수라고 부른다.
전역 변수는 같은 이름을 가진 지역 변수에 의해 가려지지만 않는다면 모든 함수에서 접근할 수 있다.
변수는 연관되는 함수 내에 선언하고, 전역 변수는 되도록 사용하지 않는 것이 좋다. 비교적 근래에 작성된 코드들은 대부분 전역변수를 사용하지 않거나 최소한으로만 사용한다. 다만 프로젝트 전반에서 사용되는 데이터는 전역 변수에 저장하는 것이 유용한 경우도 있다.


## 매개변수
매개변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달할 수 있다. 매개변수는 인수(argument)라고 불리기도 한다.

아래 예시에서 함수 showMessage는 매개변수 ```from```과 ```text```를 가진다.

```
function showMessage(from, text) {
    alert(from + ': ' + text);
}
showMessage('Ann','Hello'); // Ann: Hello
showMessage('Ann','what's up?'); // Ann: what's up? 
```

함수를 호출하면 함수에 전달된 인자는 지역변수 ```from```, ```text```에 복사된다.
그 후 함수는 지역변수에 복사된 값을 사용한다.

## 기본값
매개변수에 값을 전달하지 않으면 그 값은 ```undefined```가 된다.

위에서 정의한 함수 ```showMessage(from, text)```는 매개변수가 2개지만, 아래와 같이 인수를 하나만 넣어서 호출할 수 있다.
```showMessage("Ann");```
이렇게 코드를 작성해도 에러가 발생하지 않는다. 하지만 두번째 매개변수에 값을 전달하지 않았으므로 ```text```엔 ```undefined```가 할당되어 ```"Ann: undefined```가 출력된다.

매개변수에 값을 전달하지 않아도 그 값이 ```undefined```가 되지 않게 하려면 기본값을 설정해주면 된다. 매개변수 오른쪽에 ```=```을 붙이고 ```undefined``` 대신 설정하고자 하는 기본값을 써주면 된다.

```
function showMessage(from, text = "no text given") {
    alert(from + ": " + text);
}
showMessage("Ann"); // Ann: no text given
```

❕ **매개변수 기본값 평가 시점**

자바스크립트에서는 함수를 호출할 때마다 매개변수 기본값을 평가한다. 물론 해당하는 매개변수가 없을 때만 기본값을 평가한다.

### 매개변수 기본값을 설정할 수 있는 또 다른 방법

가끔은 함수가 실행되는 도중에 기본값을 설정하는 게 논리에 맞는 경우가 생기기도 하는데 이런 경우에는 매개변수를 ```undefined```와 비교하여 함수 호출 시 매개변수가 생략되었는지를 확인한다.

```
function showMessage(text) {
    if (text === undefined) {
        text = '빈 문자열';
    }

    alert(text);
}

showMessage(); // 빈 문자열
```

```||```을 사용할 수도 있다.

```
// 매개변수가 생략되었거나 빈 문자열("")이 넘어오면 변수에 '빈 문자열'이 할당
function showMessage(text) {
    text = text || '빈 문자열';
    ...
}
```

## 반환 값
함수를 호출했을 때 함수를 호출한 그 곳에 특정 값을 반환하게 할 수 있다. 이 때 특정 값을 반환 값이라고 한다.

지시자 ```return```은 함수 내 어디서든 사용할 수 있고 ```return```을 만나면 함수 실행은 즉시 중단되고 함수를 호출한 곳에 값을 반환한다.

```
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('보호자 동의를 받으셨나요?');
    }
}

let age = prompt('나이를 알려주세요', 18);

if (checkAge(age)) {
    alert('접속 허용');
} else {
    alert('접속 차단');
}
```

❕**```return```문이 없거나 ```return```지시자만 있는 함수는 ```undefined```를 반환한다.**

```return```문이 없는 함수도 무언가를 반환한다. ```undefined```를 반환한다.

```
function doNothing() {
    alert(doNothing() === undefined); // true
}
```

```return```지시자만 있는 경우도 ```undefined```를 반환한다. ```return```은 ```return undefined```와 동일하게 동작한다.
```
function doNothing() {
    return;
}
alert(doNothing() === undefined); // true
```

⚠**```return```과 값 사이에 절대 줄을 삽입하면 안된다**

반환하려는 값이 긴 표현식인 경우 ```return```과 반환하려는 값 사이에 새 줄을 넣어 코드를 작성하고 싶을 수도 있다.
하지만 자바스크립트는 return문 끝에 자동으로 세미콜론을 넣기 때문에 표현식을 여러 줄에 걸쳐 작성하고 싶다면 ```return``` 지시자가 있는 줄에서 시작하도록 해야한다.

ex)
```
return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
    )
```

## 함수 이름 짓기

함수 이름은 가능한 한 간결하고 명확해야한다. 함수가 어떤 동작을 하는지 설명할 수 있어야 한다. 코드를 읽는 사람은 함수 이름만 보고도 함수가 어떤 기능을 하는지 힌트를 얻을 수 있어야 한다.

함수가 어떤 동작을 하는지 축약해서 설명해주는 동사를 접두어로 붙여 함수 이름을 만드는 게 관습이다만, 팀 내에서 그 뜻이 반드시 합의된 접두어만 사용해야 한다.

* ```"show"```- 대개 무언가를 보여주는 함수
* ```"get.."```- 값을 반환하는 느낌
* ```"calc..```- 값을 계산함
* ```"create"```- 무언가를 생성
* ```"check"``` - 무언가 확인하고 불린값 반환

위 접두어를 사용하면 아래와 같은 함수를 만들 수 있다.

```
showMessage(..)     // 메시지를 보여줌
getAge(..)          // 나이를 나타내는 값을 얻고 그 값을 반환함
calcSum(..)         // 합계를 계산하고 그 결과를 반환함
createForm(..)      // form을 생성하고 만들어진 form을 반환함
checkPermission(..) // 승인 여부를 확인하고 true나 false를 반환함
```

❕ **함수는 동작 하나만 담당해야 한다.**
함수는 함수 이름에 언급되어있는 동작을 정확히 수행해야 한다. 그 이외의 동작은 수행해선 안 된다.

독립적인 두 개의 동작은 독립된 함수 두 개에서 나눠서 수행할 수 있게 해야 한다. 한 장소에서 두 동작을 동시에 필요로 하는 경우라도 말이다(이 경우는 제3의 함수를 만들어 그곳에서 두 함수를 호출한다).

다음은 개발자가 빈번히 하는 실수들이다.

* getAge 함수는 나이를 얻어오는 동작만 수행해야 합니다. alert 창에 나이를 출력해주는 동작은 이 함수에 들어가지 않는 것이 좋습니다.
* createForm 함수는 form을 만들고 이를 반환하는 동작만 해야 합니다. form을 문서에 추가하는 동작이 해당 함수에 들어가 있으면 좋지 않습니다.
* checkPermission 함수는 승인 여부를 확인하고 그 결과를 반환하는 동작만 해야 합니다. 승인 여부를 보여주는 메시지를 띄우는 동작이 들어가 있으면 좋지 않습니다.


위 예시들은 접두어의 의미가 합의되었다고 가정하고 만들었습니다. 본인이나 본인이 속한 팀에서 접두어의 의미를 재합의하여 함수를 만들 수도 있긴 하지만, 아마도 위 예시에서 사용한 접두어 의미와 크게 차이가 나진 않을 겁니다. 어찌 되었든 접두어를 사용하여 함수 이름을 지을 땐, 해당 접두어에 어떤 의미가 있는지 잘 이해하고 있어야 합니다. 해당 접두어가 붙은 함수가 어떤 동작을 하는지, 어떤 동작은 하지 못하는지 알고 있어야 하죠. 접두어를 붙여 만든 모두 함수는 팀에서 만든 규칙을 반드시 따라야 합니다. 팀원들은 이 규칙을 충분히 이해하고 있어야 하며, 팀원들 사이에 이 규칙이 잘 공유되어야 합니다.