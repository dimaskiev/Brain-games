import { playGames } from '..';
import { getRandomNumber, makeQuestion } from '../common/common';


const isPrime = (num) => {
  if (num < 2) return false;
  let count = 2;
  for (let i = 2; i <= (num - 1); i += 1) {
    if ((num % i) === 0) count = i;
  }
  if (count === 2) return true;
  return false;
};

const getRightAnswer = (num) => {
  if (num === true) return 'yes';
  return 'no';
};

const gameInit = () => {
  const oneNumber = getRandomNumber();
  const answer = getRightAnswer(isPrime(oneNumber));
  const question = `${oneNumber}`;
  return makeQuestion(question, answer);
};


export default () => {
  const gameManual = 'Answer "yes" if number prime otherwise answer "no".';
  playGames(gameManual, gameInit);
};
