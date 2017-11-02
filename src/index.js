import readlineSync from 'readline-sync';

/* greeting and ask name user */
const greeting = (gameManual) => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  console.log(gameManual);
  const userName = readlineSync.question('What\'s your name?: ');
  return userName;
};

/* print result */
const printResult = (result, Answer, userName) => {
  console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${result}"`);
  console.log(`Let's try again, ${userName}`);
};



/* get answer */
const getAnswer = () => readlineSync.question('Answer: ');


/* Сheck the correct answer */
const isRightAnswer = (result, answer) => {
  if (result === answer) return true;
  return false;
};

/* main function */

export const playGame = (gameManual, questions, answers, countCycles) => {
  let rightAnswer = 0;
  let countAnswer = 0;
  const userName = greeting(gameManual);
  const gameCount = countCycles;
  while (countAnswer < gameCount) {
    const question = questions[countAnswer];
    console.log(`Question: ${question}`);
    const Answer = getAnswer();
    const result = isRightAnswer(String(answers[countAnswer]), String(Answer));
    if (result) {
      console.log('Correct!');
      rightAnswer += 1;
      countAnswer += 1;
    } else {
      printResult(answers[countAnswer], Answer, userName);
      return;
    }
  }
  if (rightAnswer === gameCount) console.log(`Congratulations, ${userName}`);
};
