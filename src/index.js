import readlineSync from 'readline-sync';

/* greeting and ask name user */
export const greeting = (gameManual) => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  console.log(gameManual);
  const userName = readlineSync.question('What\'s your name?: ');
  return userName;
};

/* print result */
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
  let rightAnswer = true;
  while (countAnswer < gameCount) {
    rightAnswer = getAnswer();
    console.log(rightAnswer);
    if (rightAnswer) {
      rightAnswerUser += 1;
      countAnswer += 1;
    } else countAnswer = gameCount;
  }
  if (rightAnswerUser === gameCount) console.log(`Congratulations, ${userName}`);
};
