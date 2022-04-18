# 자료형

자바스크립트의 변수는 자료형에 관계 없이 모든 데이터일 수 있다. 따라서 변수는 어떤 순간에 문자열일 수도 있고 다른 순간엔 숫자가 될 수도 있다.

```
let message = "hello";
message = 1234;
```

이처럼 자료의 타입음 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 '동적 타입(dynamically typed)'언어라고 부른다.

## 숫자형

```
let n = 123;
n = 12.34;
```
숫자형은 정수 및 부동소수점 숫자를 나타낸다.
숫자형과 관련된 연산은 다양한데, 곱셈 *, 나눗셈 /, 덧셈 + , 뺄셈 - 등이 대표적이다.
숫자형엔 일반적인 숫자 외에 Infinity, -Infinity, NaN 같은 '특수 숫자 값'이 포함된다.

* Infinity는 어떤 숫자보다 더 큰 특수 값, 무한대를 나타낸다.

어느 숫자든 0으로 나누면 무한대를 얻을 수 있다.

```
alert(1 / 0); // 무한대
```

Infinity를 직접 참조할 수도 있다.

```
alert(Infinity); // 무한대
```

* NaN은 계산 중 에러가 발생했다는 것을 나타내주는 값이다. 부정확하거나 정의되지 않은 수학 연산을 사용할 시 NaN이 반환된다.

```
alert("숫자가 아님" / 2);  // NaN, 문자열을 숫자로 나누면 오류 발생
```

## BigInt

BigInt형은 표준으로 채택된 지 얼마 안 된 자료형으로, 길이에 상관없이 정수를 나타낼 수 있다.
BigInt형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있다.

```
// 끝에 'n'이 붙으면 BigInt형 자료이다.
const bigInt = 15148521632215152236n;
```

## 문자형

자바스크립트에서는 문자열을 따옴표로 묶는다.

```
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;
```

따옴표는 세 종류가 있다.
1. 큰 따옴표: "Hello"
2. 작은 따옴표: 'Hello'
3. 역 따옴표(백틱): `Hello`

큰 따옴표와 작은 따옴표는 기본적인 따옴표로 자바스크립트에서는 이 둘에 차이를 두지 않는다.

역 따옴표로 변수나 표현식을 감싼후 ${...} 안에 넣엊 면, 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있다.

```
let name = "youngeun"

// 변수를 문자열 중간에 삽입
alert(`Hello, ${name}!`); // Hello, youngeun!

// 표현식을 문자열 중간에 삽입
alert(`the result is ${1+2}`); // the result is 3
```
${...} 안에는 변수나 수학 관련 표현식 삽입이 가능하다. 평가가 끝난 후 문자열의 일부가 된다.
큰 따옴표나 작은 따옴표를 사용하면 중간에 표현식을 넣을 수 없다는 것에 주의해야한다.

## 불린형

불린형은 true 와 false 두 가지 값 밖에 없는 자료형이다.
true는 긍정, false는 부정을 의미한다.

```
let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)
```

비교 결과를 저장할 때도 사용된다.

```
let isGreater = 4 > 1;

alert( isGreater ); // true (비교 결과: "yes")
```

## null

null 값은 어느 자료형에도 속하지 않는 값이다.
null 값은 오로지 null 값만 포함하는 별도의 자료형을 만든다.

```
let age = null;
```
자바스크립트 이외의 언어와 자바스크립트에서 사용하는 null은 성격이 다르다.
자바스크립트에서 null은 존재하지 않는 값, 비어있는 값, 알수 없는 값을 나타내는 데 사용한다.

## undefined

undefined 값도 null 값처럼 자신만의 자료형을 형성한다.
undefined는 '값이 할당되지 않은 상태'를 나타낼 때 사용한다.
변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당된다.

```
let age;
alert(age); // 'undefined' 출력
```

## 객체와 심볼

객체형은 특수한 자료형이다.
데이터 컬렉션이나 복잡한 개체를 표현 가능하다.

## typeof 연산자

인수의 자료형을 반환하고 자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 빠르게 알아내고자 할 때 유용하다.

```
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object" // math는 수학 연산을 제공하는 내장 객체이므로 object 출력

typeof null // "object"  (2) // 하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황이어서 object

typeof alert // "function"  (3)  // 함수는 객체형에 속하고 이런 동작 방식이 아주 오래전에 만들어진 규칙이어서 하위 호환성 유지를 위해 남겨진 상태
```


