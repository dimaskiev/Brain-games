import { cons } from 'hexlet-pairs';
import { playGames } from '..';
import { getRandomNumber } from '../common/common';


const getRandomOperand = () => {
  let rand = 1 + (Math.random() * 3);
  rand = Math.floor(rand);
  switch (rand) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '/';
  }
};

const getResultCals = (oneNumber, twoNumber, operand) => {
  let answer = 0;
  switch (operand) {
    case '+':
      answer = oneNumber + twoNumber;
      break;
    case '-':
      answer = oneNumber - twoNumber;
      break;
    case '*':
      answer = oneNumber * twoNumber;
      break;
    default:
      answer = (oneNumber / twoNumber).toFixed(2);
      break;
  }
  return answer;
};

const gameInit = () => {
  const oneNumber = getRandomNumber();
  const twoNumber = getRandomNumber();
  const operand = getRandomOperand();
  const answer = getResultCals(oneNumber, twoNumber, operand);
  const question = `${oneNumber} ${operand} ${twoNumber}`;
  return cons(question, answer);
};

export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  playGames(gameManual, gameInit);
};
