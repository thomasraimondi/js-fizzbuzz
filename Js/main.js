// Declare Variable
const multipleOfThree = "Fizz";
const multipleOfFive = "Buzz";
const multipleOfThreeAndFive = "FizzBuzz";
const myWindows = document.open();
let outputMessage;

// Execute Script
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    outputMessage = `${i} : "${multipleOfThreeAndFive}" (Multiplo di 3 e di 5)`;
  } else if (i % 3 == 0) {
    outputMessage = `${i} : "${multipleOfThree}" (Multiplo di 3)`;
  } else if (i % 5 == 0) {
    outputMessage = `${i} : "${multipleOfFive}" (Multiplo di 5)`;
  } else {
    outputMessage = i;
  }
  console.log(`${outputMessage}`);
}
