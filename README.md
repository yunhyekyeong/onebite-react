# onebite-react

인프런 한입크기로 잘라먹는 리액트 강의기록

---

## 자바스크립트 기본

### 1. 변수와 상수

값을 저장하는 **박스**와 같은 역할을 합니다.

- 선언한다: 변수/상수를 만들 때 이름을 붙이고 값을 정함
- 초기화 한다: 선언된 변수/상수에 저장할 초기값을 할당
- 네이밍/명명: 변수/상수에 이름을 붙임
- 같은 블록 범위에서 중복된 이름으로 다시 선언할 수 없음

#### 1) 변수

- 변수는 언제든지 값의 변경이 가능
- 값이 변경 가능하기 때문에 초기값을 설정하지 않아도 됨
- 초기값을 설정하지 않으면 값이 없다는 의미인 undefined가 출력

```javascript
let age = 27; // age로 변수 선언하고 27값을 주어 초기화
let age; // undefined로 출력, 중복이름 선언 불가

age = 30; // 변수 값 변경
```

#### 2) 상수

- 변수와 다르게 선언 한 후에는 값을 변경 할 수 없음 초기화된 값 유지
- 변경 할 수 없거나 변하지 않아야 할 때 사용하여 선언
- 값을 변경 할 수 없기 때문에 초기화가 반드시 필요

```javascript
const birth = "1990. 11. 21"; // birth로 선언하고 초기화 반드시
const birth; // 초기화 선언 하지않으면 오류 초기화 반드시

birth = "1997. 11. 21"; // 변경 불가능 오류
```

#### 3) 네이밍 규칙/변수 명명규칙

1. $, \_ 제외한 기호는 사용 할 수 없다.
2. 숫자로 시작할 수 없다.
3. 예약어(문법용어)를 사용할 수 없다.
4. 협업을 위해 의미있는 단어의 조합으로 네이밍 짖기

---

### 2. 자료형(Type)

동일한 속성이나 특성을 가진 원소들의 집합

#### 1) 원시타입 : 프로그래밍에 있어 기본적인 타입

##### a. number

- 양수 무한대 infinity
- 음수 무한대 -infinity
- 수치연산 실패 결과값 NaN(not a number) (ex: 문자열 + 숫자 같은 말도 안되는 연산 하면 나옴

##### b. string

- ${변수/상수명}`을 활용하여 스트링에 변수 적용

```javascript
let myName = "윤혜경";
let myCompany = "aicess";

let introduceText = `${myName}은 ${myLocation}에 다닙니다.`;
```

##### c. boolean

- 참/거짓

```javascript
let isSwitchOn = true; // 스위치가 on이면 true 이다 \
let isEmpty = false;

// boolean 변수명은 'is = ~이다' 를 붙임
```

##### d. null

- 아무것도 없는 상태

```javascript
let empty = null;
```

##### e. undefined

- 값이 할당 안된 상태

```javascript
let empty;

console.log(empty); // undefined 출력
```

#### 2) 객체타입

##### a. object

- array
- function
- RegexExp

---

### 3. 형 변환(Type Casting)

값의 타입을 다른 타입으로 변경

#### 1) 묵시적 형 변환 (암묵적) : 자바스크립트 엔진이 알아서 형 변환

- 특정 하나의 변수의 값을 형변환 했을때 오류가 나지않고 연산이 잘 될 수 있는 경우에 만 묵시적 형 변환이 일어남

```javascript
let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020 출력 -> num이 string으로 js가 알아서 형 변환
```

#### 2) 명시적 형 변환 : 개발자가 직접 형 변환을 일으킴

- 내장함수(js 기본적 제공 함수)등을 이용해 직접 형 변환 실시

##### a. 문자열 → 숫자

```javascript
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2);

console.log(strToNum1); // 10
console.log(strToNum2); // 10
```

##### b. 숫자 → 문자

```javascript
let num1 = 20;
let numToStr1 = String(str1);

console.log(numToStr1 + "입니다."); // 20입니다.
```

### 4. 연산자(Operator)란?

- 프로그래밍에서의 다양한 연산을 위한 기호, 키워드

#### 1) 대입 연산자 : ex) let var1 = 1; 에서 =이 대입연산자

#### 2) 산술 연산자 : +, -, \*, /, %

#### 3) 복합 대입 연산자

```javascript
let num = 10;
num = num + 20; //을 줄여서
num += 20; // 으로 사용하는 것 +=는 복합 대입 연산자
num -= 20; // -10
num *= 20; // 200
num /= 20; // 0.5
num %= 20; // 1
```

#### 4) 증감 연산자

```javascript
let num = 10;
num++; //1만 증감 변수명 뒤에 ++하면 라인이 끝나고 증감
console.log(num); // 11 후위연산

let num2 = 10;
console.log(num++); // 10출력 다음라인 되어야 1추가
// 해당라인에 증감 하고 싶다면 복합대행 연산자 사용 하거나
console.log((num2 += 1)); // 11
console.log(++num2); // 11 전위연산 라인에 바로 적용

let num3 = 10;
console.log(--num3); // 9 전위연산
console.log(num3--); // 9 후위연산
console.log(num3); // 8 후위연산 적용됨
```

#### 5) 논리 연산자 : boolean 값을 다룰때 사용

- or : true || false 둘중 하나만 참
- and : ture && false 둘다 참
- not : !ture 반대

```javascript
let or = true || false; // 둘중 하나만 조건이 true면 true
let and = true && false; // 둘다 true여야 하는데 아니여서 false 출력
let not = !true; // ture의 반대

console.log(or, and, not); // true, false, false
```

#### 6) 비교 연산자 : 두개의 값을 비교하는 연산자

- === : 서로 값과 자료형 타입이 같은 지 비교
- !== : 서로 값이 같지 않은 지 비교
- == : 자료형 타입은 비교하지 않고 값이 같은 지 만 비교
- `>, <` : 대/소 비교
- `>=, <=` : 크거나 같은, 작거나 같은 값의 비교

```javascript
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
let comp3 = 1 === "1";
let comp4 = 1 == "1";

console.log(comp1); // 값이 달라서 false
console.log(comp2); // 같지 않아서 true
console.log(comp3); // 자료형 타입이 달라서 false
console.log(comp4); // 자료형은 비교하지 않고 값만 비교 하기 때문에 true

let comp5 = 2 > 1; // 2보다 작음 true
let comp6 = 2 < 1; // 2보다 크지 않음 false

let comp7 = 2 >= 2; // 2보다 작거나 같음 true
let comp8 = 2 <= 2; // 2보다 크거나 같음 true
```

#### 7) null 병합 연산자 : 존재하는 값을 추려내는 연산자

- null, undefined가 아닌 값을 찾아내는 연산자

```javascript
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 양쪽 피연산자(참여하는)값 중에 null, undefined가 아닌 값을 찾아내서 var4에 저장
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var2 ?? var3; // 피연산자가 둘다 null, undefined가 아닌경우 처음에 적힌 var2값 저장
console.log(var6); // 10
let var7 = var3 ?? var2; // 피연산자가 둘다 null, undefined가 아닌경우 처음에 적힌 var3값 저장
console.log(var7); // 20

let userName = "윤혜경"; // let userName; 선언되면 Console.log에 굥굥이 출력
let userNicName = "굥굥이";
let displayName = userName ?? userNicName; // userName이 존재한다면 userName값을 저장하고, userName값이 없다면 userNicName의 값이 저장됨
console.log(displayName); // 윤혜경
```

#### 8) type of 연산자 : 값의 타입을 문자열로 변환하는 기능을 하는 연산자

- null, undefined가 아닌 값을 찾아내는 연산자

```javascript
let var8 = 1; // 자바스크립트 변수는 숫자값을 넣고 변수에 문자값을 넣는게 가능 변수 타입이 고정되어 있지 않음
var8 = "hellow";

let t1 = typeof var8; // hellow라는 문자열이기 때문에
console.log(t1); // string
```

#### 9) 삼항 연산자 : 항을 3개 사용하는 연산자

- 항을 3개 사용하는 연산자
- 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
- 항이란? userName ?? userNicName 이 식에서 userName, userNicName이 각각 항이고, userName ?? userNicName는 2항

```javascript
let var9 = 10;

// 요구사항 : 변수 res에 var9의 값이 짝수-> "짝", 홀수-> "홀"
let res = var9 % 2 === 0 ? "짝수" : "홀수";
console.log(res); // 짝수
```

### 5. 조건문(Conditional Statement)이란?

특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
대표적으로 if, switch 조건문

#### 1) if

```javascript
let num = 10;
if (num >= 10) {
  // 조건이 참
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다!");
} else if (num >= 5) {
  // 첫번째 조건이 만족되지 않을 때
  // else if는 갯수 제한이 없음
  console.log("num은 3이상 입니다.");
} else if (num >= 3) {
  console.log("num은 3 이상입니다.");
} else {
  // 조건 거짓  else: 그렇지 않으면
  console.log("조건이 거짓입니다!");
}
```

#### 2) switch

- if문과 기능 자체는 동일
- 다수의 조건을 처리할 때 if보다 더 직관적

```javascript
let animal = "cat"; // 어떠한

switch (
  animal // animal 변수 조건과 맞는 case를 위에서 부터 아래로 쭉 내려오며 비교함 그래서 모든 코드 수행되어 모든 콘솔 다 실행
) {
  case "cat": {
    console.log("고양이");
    break; // 조건이 되면 switch문 종료
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    // 모든 조건에 일치하는 case가 없을 때 (if문의 else 같은 기능)
    console.log("그런 동물은 전 모릅니다.");
  }
}
```

### 6. 반복문(Loop, Iteration)이란?

어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법

#### for문

- 초기식 : for문 내부에서 사용하는 특별한 변수(반복이 몇번 카운트 -> 카운트변수 라고 부름)를 초기화
- 조건식 : 반복문이 언제까지 반복할 것인지 참일 때만 반복, 거짓일 때 반복 멈춤
- 증감식 : 매번 반복마다 카운터 변수를 증감시키는 역할 -> 몇번 반복되었는 지 알 수 있음

```javascript
for (let idx = 0; idx < 5; idx++) {
  // 초기식; 조건식; 증감식; 순서로 작성 idx 변수가 5보다 미만일 때 까지 반복수행하고 매 반복마다 idx값을 1씩 증가 (0, 1, 2, 3, 4)
  console.log("반복문"); // 4 반복문
  console.log(idx); // 0, 1, 2, 3, 4
}

// idx의 값이 5이상이 되면 종료하고 싶은데 조건식을 건들이지 않고 하는 방법
for (let idx = 0; idx <= 10; idx++) {
  console.log("반복문"); // 4 반복문
  console.log(idx); // 0, 1, 2, 3, 4, 5

  if (idx >= 5) {
    break;
  }
}

// 반복의 회차를 건너뛰는 방법
for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; // 조건의 true면 해당 회차에서 아래의 조건문이 실행되지 않고 다음 회차로 넘어가서 실행됨
  }

  if (idx >= 5) {
    break;
  }

  console.log(idx); // 1, 3, 5
}
```

### 7. 함수

공통으로 자주 사용되는 유사한 코드들을 묶어 이름을 붙이고 해당 기능이 필요 할 때 함수의 이름 만 불러서 간단하고 간결하게 기능을 가저다 쓸 수 있도록 하는 자바스크립트 문법

- 함수선언 : 함수를 새롭게 만드는 행위 선언했다고 실행되는게 아님
- 함수호출 : 함수 실행
- 함수가 호출되면 선언한 함수 내부로 실행 순서가 넘어감

  1. 함수선언
  2. 호출전 콘솔 실행
  3. greating 함수 실행
  4. 포탈을 타고 넘어가는 것처럼 greating 함수 내부 실행
  5. 호출 후 콘솔 실행

- 중첩함수 : 함수 안에 또 다른 함수 가능
- 매개변수 : 선언하고 싶은 변수에 전달받은 인수를 저장 함수 내부에서 사용
- 인수 : 함수 호출할 때 정해준 매개변수의 값
- 호이스팅 : 끌어올리다 라는 뜻 내부적으로 자바스크립트에서 알아서 끌어올려 실행함 호이스팅 덕분에 유연하게 코딩 가능(함수의 호출보다 함수를 아래에 두어도 문제없이 실행됨)

```javascript
function greating() {
  console.log("안녕하세요");
}

console.log("호출 전");

greating(); // 소괄호 반드시 작성

console.log("호출 후");

function getAear(width, height) {
  // 선언하고 싶은 변수 선언 width 에 10 저장, height에 20저장 매개변수
  let area = width * height;

  console.log(area); // 200

  // 중첩함수
  function another() {
    console.log("another"); // another
  }

  another(); // 중첩함수 호출 // another

  return area; // 반환값
}

let area1 = getAear(10, 20); // 반환값을 변수에 담아 활용 가능
console.log(area1); // 200

getAear(10, 20); // 인수 전달
getAear(30, 20); // 인수 전달
getAear(120, 200); // 인수 전달

// 호이스팅으로 함수호출이 함수선언보다 윗라인에 있어도 실행됨
getAear(10, 20);

function getAear(width, height) {
  let area = width * height;

  console.log(area);

  function another() {
    console.log("another");
  }

  another();

  return area;
}
```
