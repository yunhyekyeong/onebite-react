// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동장을 수행시키는 메서드
let arr1 = [1, 2, 3]; // 배열만큼 순회 3회 호출

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2); // 0 2 / 1 4 / 2 6
});

let doubledArr = [];

arr1.forEach(() => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // 2, 4, 6

// 2. includes -> 배열에 특정 요소가 있는지 확인하는 메서드

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
let isInclude2 = arr2.includes(10);

console.log(isInclude); // true
console.log(isInclude2); // false

// 3. indexOf -> 특정 요소의 인덱스(위치)를 찾아서 변환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 인수에 값
console.log(index); // 2의 인덱스 1 출력

let arr4 = [2, 2, 2]; // 같은 값이 중복
let index2 = arr4.indexOf(2); //
let index3 = arr4.indexOf(20); // 존재하지 않는 값

console.log(index2); // indexOf는 배열의 맨 앞에서 부터 탐색하기 때문에 첫번째 인덱스 0 출력
console.log(index3); // 존재하지 않는 값은 -1 반환

// 4. findIndex
// 특정 요소의 인덱스(위치)를 반환하는 메서드 모든 요소를 순회하면서, 콜백함수를 만족 요소의 인덱스 반환
// 콜백함수를 만족한다 : 콜백함수가 참을 반환한다.

let arr5 = [1, 2, 3];

const findIndex = arr5.findIndex((item) => {
  if (item === 2) return true;
});

const findIndex2 = arr5.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

const findIndex3 = arr5.findIndex((item) => item % 2 !== 0); // 간결하게
const findIndex4 = arr5.findIndex((item) => item === 999); // 배열에 없는 값

console.log(findIndex); // 조건이 true인 요소의 인덱스 1
console.log(findIndex2); // 0
console.log(findIndex3); // 0
console.log(findIndex4); // 배열에 없는 값 -1

// 특정 요소의 index가 필요할때 indexOf 메소드를 사용하면 되지 굳이 findIndex 메소드가 굳이 필요 할까?
// findIndex가 필요한 이유는 indexOf는 배열에 원시타입이 들어 있을때가 아니라 객체타입의 값이 들어있을 때는 정확한 값을 찾아내기 힘듬

let objectArr = [{ name: "이정한" }, { name: "홍길동" }];

const objectIndexOf = objectArr.indexOf({ name: "이정한" });
console.log(objectIndexOf); // -1 못 찾고 있음
// 이유는 indexOf는 얕은 비교 === 동등연산자를 사용하여 비교함 객체타입은 참조값을 통해서 비교가 되기 때문에 프로퍼티를 기준으로는 index를 찾기 힘듬

// 그래서 findIndex를 사용하는 것임 콜백함수를 이용해서 item의 name이라는 프로퍼티의 값을 비교하는것이기 때문에 정확한 위치를 찾을 수 있음
const objectFindIndex = objectArr.findIndex((item) => item.name === "이정한");
console.log(objectFindIndex); // 0

// 최종정리
// 단순한 원시타입의 값은 indexOf 사용
// 객체타입은 findIndex 사용
