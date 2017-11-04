import { playGames } from '..';
import { getRandomNumber, isPrime, getRightAnswer, makeQuestion } from '../common/common';

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
