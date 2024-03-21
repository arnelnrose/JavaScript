/*  === JSON STRINGIFY ===
    You can convert JSON into string
    by using JSON.stringify() method. */
// EXAMPLE #1:
let person = {
  fName: "Arnel",
  lName: "Rose",
  age: 42,
};

console.log(person);
let strPerson = JSON.stringify(person);
console.log(strPerson);
