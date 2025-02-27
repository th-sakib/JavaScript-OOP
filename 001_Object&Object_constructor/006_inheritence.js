class Names {
  constructor(name) {
    this.name = name;
  }
}

class Age extends Names {
  constructor(age, name) {
    super(name);
    this.age = age;
  }
}

const human = new Age(20, "sakib");
console.log(human);
