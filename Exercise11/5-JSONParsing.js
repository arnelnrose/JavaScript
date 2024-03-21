/*  === JSON PARSIN ===
    You can convert valid string into JSON
    by using JASON.parse() method. */
// EXAMPLE #1:
let strPerson = `{"fName":"Arnel","lName":"Rose","age":42}`;

console.log(strPerson);
let person = JSON.parse(strPerson);
console.log(person);
