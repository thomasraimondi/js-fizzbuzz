// Declare Variable
const multipleOfThree = "Fizz";
const multipleOfFive = "Buzz";
const multipleOfThreeAndFive = "FizzBuzz";
let outputMessage;

// Execute Script
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    outputMessage = `"${multipleOfThreeAndFive}" : ${i} (Multiplo di 3 e di 5)`;
  } else if (i % 3 == 0) {
    outputMessage = `"${multipleOfThree}" : ${i} (Multiplo di 3)`;
  } else if (i % 5 == 0) {
    outputMessage = `"${multipleOfFive}" : ${i} (Multiplo di 5)`;
  } else {
    outputMessage = i;
  }
  console.log(`${outputMessage}`);
}
