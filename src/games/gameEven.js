import { playGame } from '..';
import { getRandomNumber } from '../common/common';

const isEven = (num) => {
  if ((num % 2) === 0) return true;
  return false;
};

const getEven = (num) => {
  if (num === true) return 'yes';
  return 'no';
};

export default () => {
  const gameManual = 'Answer "yes" if number even otherwise answer "no".';
  const gameCycles = 3;
  const rightAnswersCount = 3;
  const question = getRandomNumber(gameCycles);
  const resultEven = question.map(isEven);
  const rightAnswers = resultEven.map(getEven);
  playGame(gameManual, question, rightAnswers, gameCycles, rightAnswersCount);
};
