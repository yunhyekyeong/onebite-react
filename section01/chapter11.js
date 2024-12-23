// 함수선언 : 함수를 새롭게 만드는 행위 선언했다고 실행되는게 아님
function greating() {
  console.log("안녕하세요");
}

console.log("호출 전");

// 함수호출 : 함수 실행
greating(); // 소괄호 반드시 작성

// 함수가 호출되면 선언한 함수 내부로 실행 순서가 넘어감
// 1. 함수선언
// 2. 호출전 콘솔 실행
// 3. greating 함수 실행
// 4. 포탈을 타고 넘어가는 것처럼 greating 함수 내부 실행
// 5. 호출 후 콘솔 실행

console.log("호출 후");

function getAear(width, height) {
  // 선언하고 싶은 변수 선언 width 에 10 저장, height에 20저장 매개변수
  let area = width * height;

  console.log(area); // 200

  // 함수 안에 또다른 함수 가능 = 중첩함수
  function another() {
    console.log("another"); // another
  }

  another(); // 내부 함수 호출 // another

  return area; // 반환값
}

let area1 = getAear(10, 20); // 반환값을 변수에 담아 활용 가능
console.log(area1); // 200

getAear(10, 20); // 인수 전달
getAear(30, 20); // 인수 전달
getAear(120, 200); // 인수 전달

// 함수의 호출보다 함수를 아래에 두어도 문제없이 실행됨

getAear(10, 20);

// 호이스팅 : 끌어올리다 라는 뜻 내부적으로 자바스크립트에서 알아서 끌어올려 실행함 호이스팅 덕분에 유연하게 코딩 가능
function getAear(width, height) {
  let area = width * height;

  console.log(area);

  function another() {
    console.log("another");
  }

  another();

  return area;
}
