// 객체(Object)란?
// 1. 객체 생성
let obj1 = new Object(); // 내장함수 객체 생성자
let obj2 = {}; // 객체 리터럴 > 간결하기 때문에 대부분 객체 생성

// 2. 객체 프로퍼티
let person = {
  name: "이정환", // 객체의 정보값을 객체 프로퍼티(property) = 객체 속성 이라고 부름
  age: 27, // 프로퍼티는 key: value로 구성
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20, // 숫자 값도 키로 사용 가능
  "like a cat": 20, //띄어쓰기가 포함된 키는 문자열 변환
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근
// - (점 표기법)
let name = person.name;
console.log(name); // 이정환

let name2 = person.name2;
console.log(name); // 존재하지 않는 프로퍼티 접근하면 undefind 출력

// - (괄호 표기법)
// 동적으로 프로퍼티를 변화시키면서 가저와야 할 때 사용

let age = person["age"]; // 문자열로 명시
console.log(age); // 27

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 테니스

// 3.2 새로운 프로퍼티 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person); // favoriteFood: 떡볶이 추가되어 나옴

// 3.3 프로퍼티 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

console.log(person); // job: educator, favoriteFood: 초콜릿 변경되어 나옴

// 3.4 프로퍼티 삭제하는 방법
delete person.job;
console.log(person); // job 삭제하고 나옴

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
// - (in 연산자)
let result1 = "name" in person; // name 키가 person에 들어있나?
let result2 = "cat" in person; // cat 키가 person에 들어있나?
console.log(result1); // true
console.log(result2); // false
