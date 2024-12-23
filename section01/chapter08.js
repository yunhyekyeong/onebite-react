// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 양쪽 피연산자(참여하는)값 중에 null, undefined가 아닌 값을 찾아내서 var4에 저장
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var2 ?? var3; // 피연산자가 둘다 null, undefined가 아닌경우 처음에 적힌 var2값 저장
console.log(var6); // 10
let var7 = var3 ?? var2; // 피연산자가 둘다 null, undefined가 아닌경우 처음에 적힌 var3값 저장
console.log(var7); // 20

let userName = "윤혜경"; // let userName; 선언되면 Console.log에 굥굥이 출력
let userNicName = "굥굥이";
let displayName = userName ?? userNicName; // userName이 존재한다면 userName값을 저장하고, userName값이 없다면 userNicName의 값이 저장됨
console.log(displayName); // 윤혜경

// 2. type of 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var8 = 1; // 자바스크립트 변수는 숫자값을 넣고 변수에 문자값을 넣는게 가능 변수 타입이 고정되어 있지 않음
var8 = "hellow";

let t1 = typeof var8; // hellow라는 문자열이기 때문에
console.log(t1); // string

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
// -> 항이란? userName ?? userNicName 이 식에서 userName, userNicName이 각각 항이고, userName ?? userNicName는 2항

let var9 = 10;

// 요구사항 : 변수 res에 var9의 값이 짝수-> "짝", 홀수-> "홀"
let res = var9 % 2 === 0 ? "짝수" : "홀수";
console.log(res); // 짝수
