/*  === OBJECT.KEYS() METHOD
    Returns the keys of a JSON in an array format.  */
    // EXAMPLE #1:

//     let person = {
//         firstName: "Arnel",
//         lastName : "Rose",
//         Age      : 42
//     }
// let keys = Object.keys(person);
//     for (let i = 0; i < keys.length; i++) {
//         console.log(person[keys[i]]);
//     }


        // EXAMPLE #2:

        let person = {
            firstName: "Arnel",
            lastName : "Rose",
            Age      : 42
        }
    let size = Object.keys(person).length;
        console.log(size);

        
    
