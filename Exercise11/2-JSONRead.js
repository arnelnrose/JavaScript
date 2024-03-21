/* === JSON READ ===
    You can READ specific values of a JSON
    by using its KEY surrounded by {}. */
// EXAMPLE #1
// let person = {
//   fName: "Arnel",
//   lName: "Rose",
//   age: 42,
// };
// console.log(person["fName"]);
// console.log(person["lName"]);
// console.log(person["age"]);

// EXAMPLE #2
// let person = {
//   fName: "Arnel",
//   lName: "Rose",
//   age: 42,
//   bloodType: "O",
// };
// console.log(person.fName);
// console.log(person.lName);
// console.log(person.age);
// console.log(person.bloodType);
// console.log(`${person.fName} ${person.lName}`);

/* === JSON READ ===
    You can read ARRAY VALUES in a JSON
    by using its key and accessing
    it normally by index. */
// EXAMPLE #1
// let person = {
//   fName: "Arnel",
//   lName: "Rose",
//   age: 42,
//   bloodType: "O",
//   hobbies: ["coding", "eating", "sleeping"],
// };
// console.log(person.hobbies[0]);
// console.log(person["hobbies"][1]);
// console.log(person["hobbies"][2]);

// EXAMPLE #1
let person = {
  fName: "Arnel",
  lName: "Rose",
  age: 22,
  bloodType: "0",
  gender: "M",
  hobbies: ["coding", "eating", "sleeping"],
  myPets: {
    1: {
      name: "Antonio",
      type: "Cockroach",
      breed: "Supella longipalpa",
    },
    2: {
      name: "Ratou",
      type: "Rat",
      breed: "Sprague-Dawley",
    },
  },
};
console.log(person.myPets[1].type);
console.log(person.myPets[2].breed);
