import readlineSync from 'readline-sync';
import { welcome, getName, getNumber, printResult } from '..';

const itsEven = (num) => {
  if ((num % 2) === 0) return true;
  return false;
};

const correctAnswers = (iseven, Answer) => {
  if ((iseven === true) && (Answer === 'yes')) {
    return true;
  } else if ((iseven === false) && (Answer === 'no')) {
    return true;
  }
  return false;
};


const isEven = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = getName();
  let rightAnswer = 0;
  let countAnswer = 1;
  while (countAnswer <= 3) {
    const number = getNumber();
    const iseven = itsEven(number);
    const correct = (iseven === true) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const Answer = readlineSync.question('Answer: ');
    const isTrue = correctAnswers(iseven, Answer);
    if (isTrue) {
      console.log('Correct!');
      rightAnswer += 1;
      countAnswer += 1;
    } else {
      printResult(correct, Answer, userName);
      return;
    }
  }
  if (rightAnswer === 3) console.log(`Congratulations, ${userName}`);
};

export { isEven };
