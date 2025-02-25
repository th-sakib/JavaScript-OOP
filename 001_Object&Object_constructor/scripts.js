const user = {
  username: "Sakib",
  age: 20,
}; // in this case the user object is not flexible. if we want to create another object with same structure we have to re-define another object...

function createUser(username, age) {
  const user = {
    username,
    age,
    getYear() {
      return new Date().getFullYear() - this.age;
    }, // but in this everytime we create new user it will consume memory for this funciton, because it will create again and again.. And thats why we have constructor function to solve this issue
  };

  return user;
}

const user1 = createUser("sakib", 20);
const user2 = createUser("Thamidul", 21);
console.log("user1", user1);
console.log("user2", user2);
