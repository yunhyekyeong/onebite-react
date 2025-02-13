// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// 각각의 변수들에 하나하나 할당해줘야 하는 불편함
// => 구조분해 할당으로 해결

let [one, two, three, four, five = 5] = arr;

console.log(one, two, three, four, five);
// 1, 3, 3, undefined, 5

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정현",
  age: 27,
  hobby: "테니스",
};

let { name, age: myAge, hobby, extra = "hellow" } = person;
console.log(name, myAge, hobby, extra);
// 이정한 27 테니스 hellow

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra); // 이정한 27 테니스 undefined
};

func(person);
