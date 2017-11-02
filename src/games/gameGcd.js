import { greeting, toGames, getNumbers } from '..';

const getResultGcd = (numOne, numTwo) => {
  const getGcd = (numberOne, numberTwo, count, gmc) => {
    const counter = count;
    if ((counter === numberOne) || (counter === numberTwo)) return gmc;

    if (((numberOne % counter) === 0) && (numberTwo % counter) === 0) {
      return getGcd(numberOne, numberTwo, counter + 1, counter);
    }
    return getGcd(numberOne, numberTwo, counter + 1, gmc);
  };

  const answers = [];
  const question = [];
  for (let i = 0; i < numOne.length; i += 1) {
    const count = 1;
    const gmc = 1;
    if ((numOne[i] === 0) || (numTwo[i] === 0)) return 0;
    answers[i] = getGcd(numOne[i], numTwo[i], count, gmc);
    question[i] = `${numOne[i]} ${numTwo[i]}`;
  }
  return { answers, question };
};

export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  const gameCycles = 3;
  const numbersOne = getNumbers(gameCycles);
  const numbersTwo = getNumbers(gameCycles);
  const rightAnswers = getResultGcd(numbersOne, numbersTwo);
  toGames(greeting(gameManual), rightAnswers.question, rightAnswers.answers);
};
