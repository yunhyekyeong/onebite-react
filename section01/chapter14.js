// 스코프
// -> 전역(전체영역) 스코프/ 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서 만 접근 가능

let a = 1; // 전역

function funcA() {
  let b = 2; // 지역
  console.log(a);

  function funcB() {} // 함수 선언식 안에서 지역 스코프
}

funcA(); // 1 출력
funcB(); // 스코프 외부 출력으로 오류 발생

if (true) {
  let c = 1;
  function funcC() {
    // 조건문 안에서 함수 선언식은 지역 스코프를 가지지 않음
    console.log(33);
  }
}

console.log(c); // 스코프 외부 출력으로 오류 발생
funcC(); // 33 출력

for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcD() {
    // 반복문 안에서 함수 선언식은 지역 스코프를 가지지 않음
    console.log(44);
  }
}

console.log(i); // 스코프 외부 출력으로 오류 발생
funcD(); // 44 출력
