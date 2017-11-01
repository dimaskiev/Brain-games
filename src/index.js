import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const getName = () => {
  const actual = readlineSync.question('What\'s your name?: ');
  return actual;
};

export const getNumber = () => {
  const num = Math.floor(Math.random(1) * 50);
  return num;
  // return num;
};

export const printResult = (result, Answer, userName) => {
  console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${result}"`);
  console.log(`Let's try again, ${userName}`);
};

export default () => {
  getName();
};
