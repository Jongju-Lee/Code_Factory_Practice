// Property Attribute
// 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
// 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
// 설정할 때 호출되는 함수로 구성된 프로퍼티 예를들면 getter와 setter

const yuJin = {
  name: "안유진",
  year: 2003,
};

/*
1) value = 실제 프로퍼티의 값
2) writable = 값을 수정 할 수 있는지의 여부. false로 설정하면 프로퍼티 값 변경 불가능.
3) enumerable = 열거가 가능한지 여부이다. for...in 룹 등을 사용할 수 있으면 true를 return 한다.
4) configurable = 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
단, writable이 true인 경우에는 값 변경과 writable을 변경하는 것은 가능하다.
*/

console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
  name: "안유진",
  year: 2003,
  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin2);
console.log(yuJin2.age); // getter 사용

console.log("------------");

console.log(yuJin2);
yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);
console.log(yuJin2);

// 2023. 10. 12 오전 12 : 09 "3section 2_property_attribute"
// 프로퍼티 어트리뷰트 7분 51초

console.log(Object.getOwnPropertyDescriptor(yuJin2, "age"));

Object.defineProperty(yuJin2, "height", {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

// writable

yuJin2.height = 180;
console.log(yuJin2);
Object.defineProperty(yuJin2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));
console.log("--------------------");
yuJin2.height = 172;
console.log(yuJin2);

// enumerable

console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}
Object.defineProperty(yuJin2, "name", {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

console.log("---------------");
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

// configurable

Object.defineProperties(yuJin2, "height", {
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

Object.defineProperty(yuJin2, "height", {
  enumerable: false,
});
