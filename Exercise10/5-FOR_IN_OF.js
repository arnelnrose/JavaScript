/*
             === FOR IN LOOP ===
    Are used for iterating over JSONs or Arrays.
    It returns the key or index of each item.
*/

/*
    // EXAMPLE: #1
    let names = ["Nel","Chan","Macoy","John","Renz"]
    for (let x in names) {
            console.log(x);
    }
    // EXAMPLE: #2
        let names = ["Nel","Chan","Macoy","John","Renz"]
    for (let x in names) {
            console.log(x);
    }

 */

/*
            === FOR OF LOOP ===
    Are used for iterating over Arrays.
    It returns the key of each element.
*/  
    // EXAMPLE: #1 
    // let names = ["Nel","Chan","Macoy","John","Renz"]
    //     for (let person of names) {
    //         console.log(person);
    //     }
    // EXAMPLE FOR IN/OF LOOP with numbering.
    let names = ["Nel","Chan","Macoy","John","Renz"]
            for (let x in names) {
               console.log(`${parseInt(x)}. ${names[x]}`);
            };

        let i = 1;
            for (let person of names) {
                console.log(`${i}. ${person}`);
                i++;
            };
