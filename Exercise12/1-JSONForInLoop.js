/*  === JSOPN & FOR/IN LOOP ===
    Wecan use FOR/IN Loop to ITERATE
    over all the keys inside a JSON. */

    // EXAMPLE:
    let person = {
        fName: "Arnel",
        lName: "Arnel",
        Age  : "Arnel"
    };
            for (let k in person) {
                console.log(`${k}: ${person[k]}`);
            };