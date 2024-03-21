/*  === CHALLENGE ==
    Create a JSON and make the KEYS a SUBJECT
    NAME and the VALUE a corresponding GRADE.
    Use FOR/IN Loop to iterate through the
    JSON and display the subjects and their
    grade, make sure to also compute the average
    of all the grades and display.  */

let grades = {
    Math    : 94,
    English : 89.5,
    Filipino: 94.6,
    Science : 96,
    Computer: 91.2
};
    let average = 0;
    for (let k in grades) {
        console.log(`${k} : ${grades[k]}`);
    average += grades[k];
    };
        average /= Object.keys(grades).length;
        console.log("");
        console.log(`Grade Average: ${average}`);