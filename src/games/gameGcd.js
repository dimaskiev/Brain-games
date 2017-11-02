import { playGame } from '..';
import {getNumbers, getResultGcd } from '../common/common.js'; 



export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  const gameCycles = 3;
  const numbersOne = getNumbers(gameCycles);
  const numbersTwo = getNumbers(gameCycles);
  const rightAnswers = getResultGcd(numbersOne, numbersTwo);
  playGame(gameManual, rightAnswers.question, rightAnswers.answers, gameCycles);
};
