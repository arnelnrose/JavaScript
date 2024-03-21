/*
Registered and 18 above - Valid Voter
Not Registered and 18 above - Register First
Registered and below 18 - invalid Voter
Not Registered and below 18 - Non Voter
*/

  let age = 18;
  let isRegistered = false;

    if (isRegistered && age >= 18) {
        alert("Valid voter.");
      } else if (!isRegistered && age >= 18) {
        alert("Register First");
      } else if (isRegistered && age != 18) {
        alert("Invalid voter.");
      } else {
        alert("Non voter.");
    }
