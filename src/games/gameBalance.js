import { playGame } from '..';
import { getNumbers } from '../common/common';

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


export default () => {
  const gameManual = 'Balance the given number.';
  const gameCycles = 3;
  const numbers = getNumbers(gameCycles);
  const rightAnswers = numbers.map(getBalanceNumber);
  playGame(gameManual, numbers, rightAnswers, gameCycles);
};
