// copy by value 값에 의한 전달
// copy by reference 참조에 의한 전달

// 1) 기본적으로 모든 primitive 값은 copy by value다
// 2) 객체는 copy by reference다.

let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

console.log("--------------");

clone += "안유진 입니다.";
console.log(original);
console.log(clone);

console.log("------------");

let originalObj = {
  name: "안유진",
  group: "아이브",
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log("------------");

cloneObj["group"] = "코드팩토리";

console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);

console.log("------------");

originalObj = {
  name: "최지호",
  group: "코드팩토리",
};

cloneObj = {
  name: "최지호",
  group: "코드팩토리",
};

console.log(originalObj === cloneObj);

console.log("------------");

const yuJin1 = {
  name: "안유진",
  group: "아이브",
};

const yuJin2 = yuJin1;
const yuJin3 = {
  name: "안유진",
  group: "아이브",
};

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

console.log("-----------------");

// Spread Operator

const yuJin4 = {
  ...yuJin3,
};

console.log(yuJin4);
console.log(yuJin4 === yuJin3); // false

const yuJin5 = {
  year: 2003,
  ...yuJin3,
};

console.log(yuJin5);

console.log("-----------");

const yuJin6 = {
  name: "코드팩토리",
  ...yuJin3,
};
console.log(yuJin6);

console.log("-----------");

const yuJin7 = {
  ...yuJin3,
  name: "코드팩토리",
};
console.log(yuJin7);

console.log("-----------");

const numbers = [1, 3, 5];
const numbers2 = [1, ...numbers];
console.log(numbers2);
