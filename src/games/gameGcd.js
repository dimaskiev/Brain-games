import { playGame } from '..';
import { getRandomNumber, findGcd } from '../common/common';

export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  const gameCycles = 3;
  const rightAnswersCount = 3;
  const numbersOne = getRandomNumber(gameCycles);
  const numbersTwo = getRandomNumber(gameCycles);
  const rightAnswers = findGcd(numbersOne, numbersTwo);
  playGame(gameManual, rightAnswers.question, rightAnswers.answers, gameCycles, rightAnswersCount);
};
