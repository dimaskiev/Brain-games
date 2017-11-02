import { greeting, toGames, getNumbers } from '..';

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
        break;
    }
  }
  return { answer, question };
};


export default () => {
  const gameManual = 'What is the result of the expression?';
  const gameCycles = 3;
  const numbersLeft = getNumbers(gameCycles);
  const numbersRight = getNumbers(gameCycles);
  const operand = ['+', '-', '*'];
  const rightAnswers = getResultCals(numbersLeft, numbersRight, operand);
  toGames(greeting(gameManual), rightAnswers.question, rightAnswers.answer);
};
