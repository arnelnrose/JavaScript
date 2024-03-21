/*
    Create a program that uses while loop to get
    the summation (sum of all numbers)
    of an array on numbers.
*/

let array = [1, 2, 3, 4, 5];
let sum = 0;
let i = 0;

    while(array[i]){
        sum += array[i];
        i++;
    }
    alert(sum);