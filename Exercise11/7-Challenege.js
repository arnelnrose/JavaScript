/*  === CHALLENGE ==
    Create an array of JSON with
    different keys and values.
    Iterate the array and display all
    its value in and orderly. */

let people = [
	{
		fName: "Arnel",
		lName: "Rose",
		age: "42"
	},
	{
		fName: "Robin",
		lName: "Padilla",
		age: "51"
	},
	{
		fName: "Richard",
		lName: "Gomez",
		age: "54"
	},
	{
		fName: "Aga",
		lName: "Mulach",
		age: "52"
	},	
];
		for (let i = 0; i < people.length; i++) {
			console.log(`First Name: ${people[i].fName}`);
			console.log(`Last Name : ${people[i].lName}`);
			console.log(`Age       : ${people[i].age}`);
			console.log("");	
		}



