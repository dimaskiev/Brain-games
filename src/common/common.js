import readlineSync from 'readline-sync';

/* get random numbers */
export const getRandomNumber = () => {
  const date = new Date();
  const number = Math.floor((Math.random(1) * 50) + (date.getDate() * 5));
  return number;
};

export const findGcd = (numOne, numTwo) => {
  const getGcd = (numberOne, numberTwo) => {
    let numFirst = numberOne;
    let numSec = numberTwo;
    while (numFirst !== numSec) {
      if (numFirst > numSec) {
        numFirst -= numSec;
      } else {
        numSec -= numFirst;
      }
    }
    return numFirst;
  };
  if ((numOne === 0) || (numTwo === 0)) return 0;
  const answers = getGcd(numOne, numTwo);
  return answers;
};

export const makeQuestion = (question, answer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === String(answer)) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  }
  return (userAnswer === String(answer));
};
