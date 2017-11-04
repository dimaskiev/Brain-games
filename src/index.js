import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

/* greeting and ask name user */
export const greeting = (gameManual) => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  console.log(gameManual);
  const userName = readlineSync.question('What\'s your name?: ');
  return userName;
};

export const printResult = (result, Answer, userName) => {
  console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${result}"`);
  console.log(`Let's try again, ${userName}`);
};

/* main function */

export const playGames = (gameManual, getAnswer) => {
  let rightAnswerUser = 0;
  let countAnswer = 0;
  const userName = greeting(gameManual);
  const gameCount = 3;
  while (countAnswer < gameCount) {
    const dataGame = getAnswer();
    const rightAnswer = cdr(dataGame);
    const question = car(dataGame);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(rightAnswer)) {
      console.log('Correct!');
      rightAnswerUser += 1;
      countAnswer += 1;
    } else {
      printResult(rightAnswer, userAnswer, userName);
      countAnswer = gameCount;
    }
  }
  if (rightAnswerUser === gameCount) console.log(`Congratulations, ${userName}`);
};
