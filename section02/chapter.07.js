// 배열 메서 1. 요소 조작

// 1. push -> 배열의 맨 뒤에 새로운 요소를 추가
let arr1 = [1, 2, 3];
arr1.push(4);
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1); // 1, 2, 3, 4
console.log(newLength); // 7

// 2. pop -> 배열 맨 뒤에 요소 제거하고 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();
console.log(popedItem); // 1, 2

// 3. shift -> 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem); // 1, 2

// 4. unshift -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
arr4.unshift(0);
const newLength2 = arr4.unshift(0);
console.log(arr4); // 0, 1, 2, 3
console.log(newLength2); // 4

// 주의사항
// shift/unshift는 push/pop보다 느리게 작동 하는데 그 이유는 배열은 인덱스를 기반으로 순차적으로 작동힘
// push/pop은 배열 맨뒤의 인덱스를 추가/제거하거나 되어 큰 문제가 없음
// shift/unshift는 배열의 맨 앞을 추가/제거하기 때문에 인덱스를 새롭게 적용하기 때문에 더 느리게 작용함

// 5. slice -> 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// slice(시작index, 끝index + 1) -> 두번째 인수 생략시 시작부터 마지막까지 자름

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // arr5.slice(2) 동일한 값
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-1); // 뒤에서 부터 1개만 잘라라
let sliced4 = arr5.slice(-3); // 뒤에서 부터 3개 잘라라

console.log(sliced); // 3, 4, 5
console.log(sliced2); // 3, 4, 5
console.log(sliced3); // 5
console.log(sliced4); // 3, 4, 5
console.log(arr5); // 1, 2, 3, 4, 5 원본 변경 안됨

// 6. concat
//  두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 만듬

let arr6 = [1, 2];
let arr7 = [3, 4];
let concatArr = arr6.concat(arr7);

console.log(concatArr); // 1, 2, 3, 4
