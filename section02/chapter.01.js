if (123) {
  console.log("123 is true");
} else {
  console.log("123 is false");
} // 123 is true 출력 123은 truthy한 값

if (undefined) {
  console.log("undefined is true");
} else {
  console.log("undefined is false");
} // undefined is false 출력 undefined는 falsy한 값

// 1. Falsy한 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy한 값
// -> 7가지 falsy한 값 제외하고 나머지 모든 값
// -> 7가지 falsy한 값 제외하고 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례

function printName(person) {
  console.log(person.name);
}

let person; // undefined
printName(person); // type 에러 undefined으로 부터 프로퍼티 읽을 수 없다

person = null;

function printName2(person) {
  if (person === undefined) {
    // || person === null 로 조건 추가해야함 > 너무 복잡하기 때문에  not 연산자 사용 !person
    console.log("person의 값이 없음");
    return; // return 조건에 맞으면 아래 함수로 접근하지 못하도록 종료
  }
  console.log(person.name); // 매개변수가 null일때 false가 되어 콘솔 실행
}
