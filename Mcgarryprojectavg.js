const readline = require("readline");

//Set up readline 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numList = [];

//Asking for input
function askInput() {
  rl.question('Please input an integer, or type "q" to quit: ', (input) => {
    if (input === "q") {
      //Print entered integers, mean, and median results
      if (numList.length > 0) {
        console.log("Numbers entered: " + numList);
        console.log("Mean: " + meanCalc(numList));
        console.log("Median: " + medianCalc(numList));
      } else {
        console.log("No numbers were entered.");
      }
      rl.close();
      return;
    }

    let num = Number(input);
    //Must be a number and integer
    if (!isNaN(num) && Number.isInteger(num)) {
      numList.push(num);
    } else {
      console.log("You must enter an integer.");
    }

    
    askInput();
  });
}

//Mean calculation
function meanCalc(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

//Median calculation
function medianCalc(array) {
  array.sort((a, b) => a - b);
  let middle = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return (array[middle - 1] + array[middle]) / 2;
  } else {
    return array[middle];
  }
}

//Start program
askInput();