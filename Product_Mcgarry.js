const readline = require("readline");

//Set up readline 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numList = [];

//Asking for input
function askInput() {
  rl.question('Please input an integer, or type "q" to quit: ', (input) => {
    
    //Exit and computes product (Not case sensitive)
    if (input.toLowerCase() === "q") {
        let conditionMet = false;
    
      //For loop that computes each integer of list, until it finds the product
      for (let i = 0; i < numList.length; i++) {
        for (let j = i + 1; j < numList.length; j++) {
          for (let k = 0; k < numList.length; k++) {
            if (numList[i] * numList[j] === numList[k]) {
              console.log(
                 `Condition is met: ${numList[i]} x ${numList[j]} = ${numList[k]}`
              );
              conditionMet = true;     
              //Changes condition upon equaling product
            }
          }
        }
      }
      //Prints lack of condition met
      if (!conditionMet) {
        console.log("No such condition found.");
      }

      rl.close(); //Exit after checking
      return;     
    }

    let num = Number(input);
    //Must be a number and integer
    if (!isNaN(num) && Number.isInteger(num)) {
      numList.push(num);
      console.log("Numbers entered: " + numList.join(", "));
    } else {
      console.log("You must enter an integer.");
    }

    askInput();
  });
}

//Start program
askInput();
