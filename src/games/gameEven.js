import { playGames } from '..';
import { getRandomNumber, makeQuestion } from '../common/common';


const isEven = (num) => {
  if ((num % 2) === 0) return true;
  return false;
};

const getEven = (num) => {
  if (num === true) return 'yes';
  return 'no';
};

const dataGame = () => {
  const oneNumber = getRandomNumber();
  const answer = getEven(isEven(oneNumber));
  const question = `${oneNumber}`;
  return makeQuestion(question, answer);
};


export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  playGames(gameManual, dataGame);
};
