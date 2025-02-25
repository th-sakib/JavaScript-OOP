// 2. We can solve the problem by just defining the function outside and passing the reference to the object

function getYear() {
  return new Date().getFullYear() - this.age; // here this keyword will change depending on where the function has been invoked and this behavious is known as "polimorphism"
}

// ***object***
function createUser(username, age) {
  const user = {
    username,
    age,
    getYear,
  };

  return user;
}

const user3 = createUser("sakib", 20);
const user4 = createUser("Thamidul", 21);

user3.getYear === user4.getYear; // result: true // because it was created (in memory) only when it was declared. (once in memory, the location not change even we create new object using the functions)

// note: Here the 2nd method is working as expected.
// But we are breaking rules of "abstraction" & "encaptulation".
// which is very important priciples in OOP...

// we can do ==============>
