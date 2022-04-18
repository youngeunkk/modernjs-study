let message = "hello";
message = 1234;

let n = 123;
n = 12.34;

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

let name = "youngeun"

// 변수를 문자열 중간에 삽입
alert(`Hello, ${name}!`); // Hello, youngeun!

// 표현식을 문자열 중간에 삽입
alert(`the result is ${1+2}`); // the result is 3

let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)

let isGreater = 4 > 1;

alert( isGreater ); // true (비교 결과: "yes")


//let age = null;


let age;
alert(age); // 'undefined' 출력

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object" // math는 수학 연산을 제공하는 내장 객체이므로 object 출력

typeof null // "object"  (2) // 하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황이어서 object

typeof alert // "function"  (3)  // 함수는 객체형에 속하고 이런 동작 방식이 아주 오래전에 만들어진 규칙이어서 하위 호환성 유지를 위해 남겨진 상태

