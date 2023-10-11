const iveMembers = [
  {
    name: "안유진",
    year: 2003,
  },
  {
    name: "가을",
    year: 2002,
  },
  {
    name: "레이",
    year: 2004,
  },
  {
    name: "장원영",
    year: 2004,
  },
  {
    name: "리즈",
    year: 2004,
  },
  {
    name: "이서",
    year: 2007,
  },
];

const btsMembers = [
  {
    name: "진",
    year: 1992,
  },
  {
    name: "슈가",
    year: 1993,
  },
  {
    name: "제이홉",
    year: 1994,
  },
  {
    name: "RM",
    year: 1994,
  },
  {
    name: "진",
    year: 1992,
  },
  {
    name: "지민",
    year: 1995,
  },
  {
    name: "뷔",
    year: 1995,
  },
  {
    name: "정국",
    year: 1997,
  },
];

class Country {
  name;
  idolGroups;
  constructor(name, idolGroups) {
    this.name = name;
    this.idolGroups = idolGroups;
  }
}

class IdolGroup {
  name;
  members;
  constructor(name, members) {
    this.name = name;
    this.members = members;
  }
}

class Idol {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdol extends Idol {
  sing() {
    return `${this.name}이 노래를 합니다.`;
  }
}

class MaleIdol extends Idol {
  dance() {
    return `${this.name}이 춤을 춥니다.`;
  }
}

const cIveMembers = iveMembers.map(
  (it) => new FemaleIdol(it["name"], it["year"])
);
console.log(cIveMembers);

const cBtsMembers = btsMembers.map(
  (it) => new MaleIdol(it["name"], it["year"])
);
console.log(cBtsMembers);

const iveGroup = new IdolGroup("아이브", cIveMembers);

console.log(iveGroup);

const btsGroup = new IdolGroup("BTS", cBtsMembers);
console.log(btsGroup);

const Korea = new Country("대한민국", [iveGroup, btsGroup]);

console.log(Korea);

const allTogether = new Country(`대한민국`, [
  new IdolGroup(
    "아이브",
    iveMembers.map((it) => new FemaleIdol(it["name"], it["year"]))
  ),
  new IdolGroup(
    "BTS",
    btsMembers.map((it) => new MaleIdol(it["name"], it["year"]))
  ),
]);

console.log(allTogether);
