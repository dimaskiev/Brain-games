import { playGame } from '..';
import { getRandomNumber } from '../common/common';

const getResultCals = (numOne, numTwo, operand) => {
  const answer = [];
  const question = [];
  for (let i = 0; i < numOne.length; i += 1) {
    switch (operand[i]) {
      case '+':
        answer[i] = numOne[i] + numTwo[i];
        question[i] = `${numOne[i]} + ${numTwo[i]}`;
        break;
      case '-':
        answer[i] = numOne[i] - numTwo[i];
        question[i] = `${numOne[i]} - ${numTwo[i]}`;
        break;
      case '*':
        answer[i] = numOne[i] * numTwo[i];
        question[i] = `${numOne[i]} * ${numTwo[i]}`;
        break;
      default:
        answer[i] = (numOne[i] / numTwo[i]).toFixed(2);
        question[i] = `${numOne[i]} / ${numTwo[i]}`;
        break;
    }
  }
  return { answer, question };
};


export default () => {
  const gameManual = 'What is the result of the expression?';
  const gameCycles = 3;
  const rightAnswersCount = 3;
  const numberOne = getRandomNumber(gameCycles);
  const numberTwo = getRandomNumber(gameCycles);
  const operand = ['+', '-', '*'];
  const rightAnswers = getResultCals(numberOne, numberTwo, operand);
  playGame(gameManual, rightAnswers.question, rightAnswers.answer, gameCycles, rightAnswersCount);
};
