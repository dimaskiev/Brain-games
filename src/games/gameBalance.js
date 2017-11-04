import { playGames } from '..';
import { getRandomNumber, makeQuestion } from '../common/common';

const getBalanceNumber = (numOne) => {
  if (numOne < 10) return numOne;
  const newStringNum = String(numOne);
  const lengthString = newStringNum.length;
  let numArray = newStringNum.split('');
  numArray = numArray.map(Number);
  let correct = 0;
  while (correct < (lengthString - 1)) {
    for (let i = 0; i <= lengthString - 2; i += 1) {
      if (numArray[i] > numArray[i + 1]) {
        if ((numArray[i] - numArray[i + 1]) >= 1) {
          numArray[i] -= 1;
          numArray[i + 1] += 1;
        } else {
          correct += 1;
        }
      } else if (numArray[i] < numArray[i + 1]) {
        if ((numArray[i + 1] - numArray[i]) > 1) {
          numArray[i + 1] -= 1;
          numArray[i] += 1;
        } else {
          correct += 1;
        }
      } else correct += 1;
    }
    if (correct < (lengthString - 1)) correct = 0;
  }
  const newStr = numArray.join('');
  return newStr;
};

const gameInit = () => {
  const oneNumber = getRandomNumber();
  const answer = getBalanceNumber(oneNumber);
  const question = `${oneNumber}`;
  return makeQuestion(question, answer);
};


export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  playGames(gameManual, gameInit);
};
