/*
    === BREAK KEYWORDS ===
    You can use the break keyword
    to break out of a loop earlier than expected.
*/
let names = ["Arnel","Chan","Macoy","John","Renz"]
let i = 0;
    for(let i = 0; i < names.length; i++){
        console.log(names[i]);

        if (i === 0) {
            break;
        }
     
    }