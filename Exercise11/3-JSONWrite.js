/*  === JSON Write ===
    You can update specific value of a JASON
    using its key surrounded by [] and
    assigning a value to it. */
// EXAMPLE #1
let person = {
  fName: "Arnel",
  lName: "Rose",
  age: 14,
  bloodType: "O",
  hobbies: ["coding", "eating", "sleeping"],
};
console.log(person);
person["fName"] = "Cayden";
console.log(person);
person["middleInitial"] = "Z";
console.log(person);
