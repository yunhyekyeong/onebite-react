// 1. if 조건문 (if문)
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

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적

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
