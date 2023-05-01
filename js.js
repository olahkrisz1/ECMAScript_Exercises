// Exercise 1.

// We have a simple object:

// let user = {
//   name: "John",
//   years: 30,
// };
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

// Solution:

let { name, years, isAdmin } = user;

let age = years;
isAdmin = false;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// Exercise 2.

// Give the right name:

// Create the variable with the name of our planet. How would you name such a variable?
// Create the variable to store the name of the current visitor. How would you name that variable?

// Solution:

let = planetEarth;

let = currentVisitor;

// Exercise 3

// Look at the code. What will be result of the call at the last line and why?

// let phrase = "Hello";

// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

sayHi();

// solution:

// it gives an error.  Function sayHi has been declared inside if statement (local scope), but it is not accessible outside of local scope and in this case , function has been called outside of scope...therefore error message says: sayhi is not defined.

// Exercise 4

// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

//Solution:

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Exercise 5

// Is it possible to change an object declared with const, how do you think and why?

const user = {
  name: "John",
};

// does it work?
user.name = "Pete";

// Solution:

// when an object is declared with const, it means that the variable cannot be assigned to a different object.
// However, the properties inside the object are changeable. They can be modified or deleted using the dot notation or bracket notation.
// in this case, the code works. we are not reassigning 'user to a different object...only modifying the existing object.

// Exercise 6

// We have an object storing salaries of our team:

// let salaries = {
//   Fred: 100,
//   Ted: 160,
//   Ghaith: 130
// }
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

//solution:

function sumAll(...restOfSalaries) {
  let sum = 0;
  for (let salary of restOfSalaries) sum += salary;
  return sum;
}

console.log(sumAll(100, 160, 130)); // 390

// Exercise 7

// Rewrite this if using the ternary operator '?':

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

// Solution:

let result = a + b < 4 ? "Below" : "Over";

//Exercise 8.

// Rewrite if..else using multiple ternary operators '?'.

// let message;

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

// solution:

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "greetings"
    : login == ""
    ? "No login"
    : "";
