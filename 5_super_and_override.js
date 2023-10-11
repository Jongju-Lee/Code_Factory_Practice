// Super and Override

class IdolModel {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  // 노래 / 춤 등..
  part;
  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }
}

const yuJin = new FemaleIdolModel("안유진", 2003, "vocal");
console.log(yuJin);

const wonYoung = new IdolModel("장원영", 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());

console.log(yuJin.sayHello());
