const multipleOfThree = "Fizz";
const multipleOfFive = "Buzz";
const multipleOfThreeAndFive = "FizzBuzz";
let outputMessage;

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    outputMessage = multipleOfThreeAndFive;
  } else if (i % 3 == 0) {
    outputMessage = multipleOfThree;
  } else if (i % 5 == 0) {
    outputMessage = multipleOfFive;
  } else {
    outputMessage = i;
  }
  console.log(outputMessage);
}
