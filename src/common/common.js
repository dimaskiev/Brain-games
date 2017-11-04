import readlineSync from 'readline-sync';

/* get random numbers */
export const getRandomNumber = () => {
  const date = new Date();
  const number = Math.floor((Math.random(1) * 150) + (date.getDate() * (150 / 10)));
  return number;
};

export const findGcd = (numOne, numTwo) => {
  const getGcd = (numberOne, numberTwo, count, gmc) => {
    const counter = count;
    if ((counter === numberOne) || (counter === numberTwo)) return gmc;
    if (((numberOne % counter) === 0) && (numberTwo % counter) === 0) {
      return getGcd(numberOne, numberTwo, counter + 1, counter);
    }
    return getGcd(numberOne, numberTwo, counter + 1, gmc);
  };
  const count = 1;
  const gmc = 1;
  if ((numOne === 0) || (numTwo === 0)) return 0;
  const answers = getGcd(numOne, numTwo, count, gmc);
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
