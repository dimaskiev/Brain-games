import readlineSync from 'readline-sync';
import { welcome, getName, getNumber, printResult } from '..';


const operands = (count) => {
  if (count === 1) return '+';
  else if (count === 2) return '-';
  return '*';
};


const getResult = (numOne, numTwo, operand) => {
  switch (operand) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    default:
      return numOne * numTwo;
  }
};

const correctAnswers = (result, Answer) => {
  if (result === Answer) return true;
  return false;
};

const calc = () => {
  welcome();
  console.log('What is the result of the expression?\n');
  const userName = getName();
  let rightAnswer = 0;
  let countAnswer = 1;
  while (countAnswer <= 3) {
    const numberOne = getNumber();
    const numberTwo = getNumber();
    const operand = operands(countAnswer);
    const result = Number(getResult(numberOne, numberTwo, operand));
    console.log(`Question: ${numberOne} ${operand} ${numberTwo}`);
    const Answer = Number(readlineSync.question('Answer: '));
    const isTrue = correctAnswers(result, Answer);
    if (isTrue) {
      console.log('Correct!');
      rightAnswer += 1;
      countAnswer += 1;
    } else {
      printResult(result, Answer, userName);

      return;
    }
  }
  if (rightAnswer === 3) console.log(`Congratulations, ${userName}`);
};

export { calc };
