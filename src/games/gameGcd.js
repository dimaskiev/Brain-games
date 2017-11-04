import { playGames } from '..';
import { getRandomNumber, findGcd, makeQuestion } from '../common/common';


const dataGame = () => {
  const oneNumber = getRandomNumber();
  const twoNumber = getRandomNumber();
  const answer = findGcd(oneNumber, twoNumber);
  const question = `${oneNumber} ${twoNumber}`;
  return makeQuestion(question, answer);
};


export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  playGames(gameManual, dataGame);
};
