import { playGames } from '..';
import { getRandomNumber, isEven, getRightAnswer, makeQuestion } from '../common/common';

const gameInit = () => {
  const oneNumber = getRandomNumber();
  const answer = getRightAnswer(isEven(oneNumber));
  const question = `${oneNumber}`;
  return makeQuestion(question, answer);
};

export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  playGames(gameManual, gameInit);
};
