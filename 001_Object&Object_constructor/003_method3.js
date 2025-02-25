// ***object***

function createUser(username, age) {
  const user = {
    username,
    age,
    getBirthYear: createUser.commonMethod.getBirthYear,
  };

  return user;
}

// setting a property and setting a method inside it (because JS function are object under the hood.)
createUser.commonMethod = {
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  },
};

const user5 = new createUser("sakib", 20);
// console.log(user5);

// Cons: in this case we are following encaptulating, abstraction. But it making us to write junky code
