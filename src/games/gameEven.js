import { cons } from 'hexlet-pairs';
import { playGames } from '..';
import { getRandomNumber, isEven, getRightAnswer } from '../common/common';


const gameInit = () => {
  const oneNumber = getRandomNumber();
  const answer = getRightAnswer(isEven(oneNumber));
  const question = `${oneNumber}`;
  return cons(question, answer);
};

export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  playGames(gameManual, gameInit);
};
