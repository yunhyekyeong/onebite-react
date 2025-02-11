// 1. 배열 생성

let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (자주 사용)

let arrC = [1, 2, 3, 4, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근

let item1 = arrC[0]; // 인덱스 사용
let item2 = arrC[1];
arrC[0] = "hello";

console.log(arrC); //인덱스 0에 "hello"로 변경
