let names = ["Nel","Chan","Macoy","John","Renz"]
let search = "Macoy";
let isFound = false;
//   === SOLUTION #1 in FOR LOOP ===
    // for (let i = 0; i < names.length; i++) {
    //     if (names[i].toLowerCase() === search.toLowerCase()) {
    //         isFound = true;
    //         alert(`Found ${names[i]}`);
    //         break;
    //     }
    // }
    //         if (!isFound) {
    //             alert("Not Found");
    //         }

//   === SOLUTION #2 in FOR LOOP IN ===
//     for (const i in names) {
//         if (names[i].toLowerCase() === search.toLowerCase()) {
//             isFound = true;
//             alert(`Found ${names[i]}`);
//             break;
//         }
//     }
//             if (!isFound) {
//                 alert("Not Found");
//             }

//   === SOLUTION #3 in FOR LOOP OF ===
    for (let person of names) {
        if (person.toLowerCase() === search.toLowerCase()) {
            isFound = true;
            alert(`Found ${person}`);
            break;
        }
    }
            if (!isFound) {
                alert("Not Found");
            }

                        