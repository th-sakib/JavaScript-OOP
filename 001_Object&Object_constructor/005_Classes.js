// classes in js is syntactic suger. in behind the schene its use object contructor
// - But it gives error if we don't create object without "new" keyword

class CreateUser {
  #secret;
  constructor(name, age, secret) {
    // this can be treat as constructor function body. but its not the same obj. constructor we used
    this.name = name;
    this.age = age;
    this.#secret = secret;
  }

  // in this section everything we define will be created in the protype of this class (function under the hood)
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  } // the method defined here is going to autometically saved in the prototype of this class

  #secretMethod() {
    return "testing the private method";
  }
}

const user51 = new CreateUser("sakib", 20, "very secret");
console.log(user51);

console.dir(CreateUser);
