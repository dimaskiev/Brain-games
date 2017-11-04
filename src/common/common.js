import readlineSync from 'readline-sync';

/* get random numbers */
export const getRandomNumber = () => {
  const date = new Date();
  const number = Math.floor((Math.random(1) * 50) + (date.getDate() * 5));
  return number;
};

export const findGcd = (numOne, numTwo) => {
  if (numTwo === 0) {
    return numOne;
  }
  return findGcd(numTwo, numOne % numTwo);
};

export const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const isEven = (num) => {
  if ((num % 2) === 0) return true;
  return false;
};

export const getRightAnswer = (num) => {
  if (num === true) return 'yes';
  return 'no';
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
