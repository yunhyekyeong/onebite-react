// 1. Spread 연산자
// -> spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr2 = [4, ...arr1, 5, 6]; //...가 spread 연산자
console.log(arr2); // [4, 1, 2, 3, 5, 6]

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3); // [1, 2, 3]
}

funcA(...arr1); // 각각 풀어해쳐저서 잘 할당됨

// 2. Rest 매개변수 -> rest : 나머지 매개변수
// 여러개의 매개변수를 받아야 할때 배열로 한번에 받아 올 수 있게 해주는 문법

function funcB(...rest) {
  console.log(rest);
}

funcB(...arr1);

// 배열에서 첫번째 인수는 one에서 저장, 두번째 인수는 two에 저장 나머지 ...rest
// rest 매개변수 뒤에는 추가적으로 매개변수 선언 할 수 없다. 이유는 rest는 나머지 변수를 저장하기 때문에
// 반드시 rest라는 단어 쓸 필요 없음 ...만 붙으면 rest 변수로 사용 가능

function funcB(one, two, ...rest) {
  console.log(rest);
}

funcB(...arr1);
