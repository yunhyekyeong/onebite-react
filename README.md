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

#### 네이밍 규칙/변수 명명규칙

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

- 값이 할당 안된 상태

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

프로그래밍에서의 다양한 연산을 위한 기호, 키워드

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
