/*
    === JASON (JavaScript Object Notation) ===
    Is a file format that is commonly used in
    transporting data, via API or other means.
*/
/*
    === JSON Structure ==
    A JSON Data should have a KEY | VALUE pair
    and a COLON ":" in the middle.
    JSON Should be surrounded by {}.
*/
// EXAMPLE #1 of JSON Structure:
// let person = {
//     fName: "Arnel",
//     lName: "Rose",                    
//     age:22,
//     bloodType: "0",
//     gender: "M"
// };
//     console.log(person);


 /*   === JSON Structure ==
    A JSON can also have arrays as its value.*/
// EXAMPLE #2 of JSON Structure with Arrays:
// let person = {
//     fName: "Arnel",
//     lName: "Rose",                    
//     age:22,
//     bloodType: "0",
//     gender: "M",
//     hobbies:["coding", "eating", "sleeping"]
// };
//     console.log(person);


 /*   === JSON Structure ==
    A JSON can also have JSON as its value.*/
// EXAMPLE #3 of NESTED JSON Structure:
let person = {
    fName: "Arnel",
    lName: "Rose",                    
    age:22,
    bloodType: "0",
    gender: "M",
    hobbies:["coding", "eating", "sleeping"],
    myPets: {
            1:{
                name: "Antonio",
                type: "Cockroach",
                breed: "Supella longipalpa"
     
            },
            2:{
                name: "Ratou",
                type: "Rat",
                breed: "Sprague-Dawley"
        }        
    }
};
    console.log(person)