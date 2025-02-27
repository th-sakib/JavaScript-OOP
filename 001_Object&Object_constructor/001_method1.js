const user = {
  username: "Sakib",
  age: 20,
}; // in this case the user object is not flexible. if we want to create another object with same structure we have to re-define another object...

// ************** The Factory Function **************
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

user1.getYear === user2.getYear; // result: false // That is explain that, these two functoin is on defferent location of memory. it is not good practice (memory location changes in every object we create)

// ************** The Object Contructor **************
// using object contructor
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player1 = new Player("sakib", "O");
const player2 = new Player("thamidul", "X"); // we have to use the "new" keyword
