import readlineSync from 'readline-sync';

/* greeting and ask name user */
export const greeting = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  console.log(game);
  const userName = readlineSync.question('What\'s your name?: ');
  return userName;
};

/* print result */
const printResult = (result, Answer, userName) => {
  console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${result}"`);
  console.log(`Let's try again, ${userName}`);
};

/* get random numbers */
export const getNumbers = (n) => {
  const date = new Date();
  const number = [];
  for (let i = 0; i < n; i += 1) {
    number[i] = Math.floor((Math.random(1) * 150) + (date.getDate() * (150 / 10)));
  }
  return number;
};

/* get answer */
const getAnswer = () => readlineSync.question('Answer: ');


/* Сheck the correct answer */
const isRightAnswer = (result, answer) => {
  if (result === answer) return true;
  return false;
};

/* main function */

export const toGames = (userName, questions, answers) => {
  let rightAnswer = 0;
  let countAnswer = 0;
  const gameCount = questions.length;
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
  if (rightAnswer === 3) console.log(`Congratulations, ${userName}`);
};
