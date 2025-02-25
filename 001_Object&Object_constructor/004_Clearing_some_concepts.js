// note: 1. If we create a function and use "new" keyword,
//            To call that function, It will return a object which is created by the funciton
//              also "this" will refer the the object it creates (by default the next inside func refer to window object [global object])

//       2. We can pass properties in that object (created for the "new" keyword).

function SayHi(name) {
  this.name = name; // "this" refer to the object (when we create objects using "new" keyword).
  // we are adding the ==name== property and setting the value which is the placeholder/parameter ==name==
}

// ========= changing prototype ============
SayHi.prototype.bye = {
  bye: "biday",
}; // when we create something in the functions prototype. the object with "new" will inherite this prototypes, so we can use them:
//                      like this => 1. const hi = new sayHi("sakib")
//                                   2. console.log(hi.__proto__.bye) or console.log(hi.bye)

const hello = SayHi("sakib"); // return: undefined. because that's the function default behavior
const hi = new SayHi("sakib"); // return: object. As I mentioned "new" keyword return object

// Final take: SayHi is the object constructor function
