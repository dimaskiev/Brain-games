import { playGame } from '..';
import { getNumbers } from '../common/common';

const isEven = (num) => {
  if ((num % 2) === 0) return 'yes';
  return 'no';
};

export default () => {
  const gameManual = 'Answer "yes" if number even otherwise answer "no".';
  const gameCycles = 3;
  const question = getNumbers(gameCycles);
  const rightAnswers = question.map(isEven);
  playGame(gameManual, question, rightAnswers, gameCycles);
};
