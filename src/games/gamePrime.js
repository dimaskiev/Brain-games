import { cons } from 'hexlet-pairs';
import { playGames } from '..';
import { getRandomNumber, isPrime, getRightAnswer } from '../common/common';


const gameInit = () => {
  const oneNumber = getRandomNumber();
  const answer = getRightAnswer(isPrime(oneNumber));
  const question = `${oneNumber}`;
  return cons(question, answer);
};


export default () => {
  const gameManual = 'Answer "yes" if number prime otherwise answer "no".';
  playGames(gameManual, gameInit);
};
