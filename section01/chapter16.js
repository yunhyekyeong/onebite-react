// 객체(Object)란?
// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal); // age: 2(추가), name: "까망이"(수정), type: "고양이", color 삭제

// 상수는 기본적으로 새로운 값을 할당하지 못하지만 저장된 객체 프로퍼티를 수정하는건 괜찮음

animal = 123; // 불가

// 2. 메서드
// -> 객체 프로퍼티 중 값이 함수인 프로퍼티

const person = {
  name: "이정현",
  sayHi: function () {
    console.log("안녕");
  },
  sayHi: () => {
    console.log("안녕");
  },
  // 메서드 선언
  sayHi() {
    console.log("안녕");
  }, // 함수 프로퍼티로 동작 정의
};

person.sayHi(); // 안녕
person["sayHi"]();
