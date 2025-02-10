// 1. 함수 표현식

function funcA() {
  console.log("funcA");
}

let varA = funcA; // 함수의 결과 값이 아닌 함수 자체를 변수에 담아서 출력 가능
console.log(varA); // 함수 자체 식이 콘솔에 출력
varA(); // funcA 함수가 실행되어 결과값 출력

// varB(); 호이스팅이 되지 않아 콘솔에 오류 출력됨

let varB = function funcB() {
  // 값으로 서 함수 생성 = 함수 표현식이라 하고 호이스팅이 되지 않음
  console.log("funcB");
};

varB(); // 변수로 선언된 함수 이기 때문에 반드시 변수로 호출

// 2. 화살표 함수
let varC = () => {
  return 1;
};
console.log(varC()); // 1

// 더 간결하게 표현
let varD = () => 1;
console.log(varD()); // 1

let varE = (value) => {
  console.log(value);
  return value + 1;
};
console.log(varE(10)); // 11
