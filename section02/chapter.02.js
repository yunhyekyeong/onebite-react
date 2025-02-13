// and 나 or 같은 논리연산식에서 해당 연산의 결과를 확정 할 수 있다면
// 두번째 피연산자에는 접근하지 않는 자바스크립트의 특징
// 단락평가를 이용하면 조건문을 사용하지 않고도 특정 상황에서 함수를 호출하지 않도록 방지하거나
// 어떤 값들을 굳이 계산하지 않도록 제한하는 등 다양한 기능 개발 가능함
function returnFalse() {
  console.log("False 함수");
  return false; // falsy한 값
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); // "False 함수", false 출력
// -> and는 모두 true일때 true를 출력하고 하나라도 false라면 false를 출력 하게 되기 때문에
// 첫번째 연산자가 false이면 다음 연산자 결과가 뭔든 false를 출력하기 때문에 다음 연산자에 접근 하지 않음 > 단락평가 작동

console.log(returnTrue() || returnFalse()); // "True 함수", true 출력
// -> or은 둘중 하나가 true일때 true를 출력하고 둘다 false라면 false를 출력 하게 되기 때문에
// 첫번째 연산자가 Ture이면 다음 연산자 결과가 뭔든 Ture를 출력하기 때문에 다음 연산자에 접근 하지 않음 > 단락평가 작동

// 단락 평가 활용 사례

function printName(person) {
  // if (!person) {
  //   console.log("person에 값이 없음");
  //   return;
  // }
  // console.log(person.name);

  // => 단략 평가를 활용하여 축약됨
  console.log(person && person.name);
}

printName(); // person이 undefined falsy한 값이기 때문에 person.name까지 접근 안함

function printName2(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName2(); // undefined이 전달되서 and 연산자에서 name이 undefined truthy한 문자열 "person의 값이 없음" 출력
printName2({ name: "이정현" }); // and 연산자에서 truthy person.name값이 name 변수에 저장되고 or 연산자에서 name 변수가 truthy한 값이라 이정환 출력
