// 콜백 함수

function main(value) {
  console.log(1);
  console.log(2);
  value();
  console.log("end");
}

function sub() {
  // 인수로 전달되는 함수 콜백함수
  console.log("sub");
}

main(sub); // console에 sub 함수 출력
// 1 > 2 > sub > end 순서로 출려되어 콜백함수는 main 함수가 언제든지 원하는 타이밍에 실행 가능함

// 함수 표현식 응용

main(function sub1() {
  // 익명함수 형식으로 사용 가능
  console.log("sub");
});

// 2. 콜백함수의 활용

function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5); // 1 > 2 > 3 > 4 > 5 순서로 출력
repeatDouble(5); // 2 > 4 > 6 > 8 > 10 순서로 출력

// 구조가 흡사한 함수들을 만들 때 마다 복붙하여 작업하면 중복 코드를 발생시켜 좋지 않은 함수 > 콜백함수를 활용하면 더 효율적인 코드 생성

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx); // 1 > 2 > 3 > 4 > 5 순서로 출력
});

// 더블 기능
repeat(5, (idx) => {
  console.log(idx * 2); // 2 > 4 > 6 > 8 > 10 순서로 출력
});

// 트리플 기능
repeat(5, (idx) => {
  console.log(idx * 3); // 3 > 6 > 9 > 12 > 15 순서로 출력
});
