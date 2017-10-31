import readlineSync from 'readline-sync';

export default () => {
  const actual = readlineSync.question('What\'s your name?: ');
  console.log(`Hello,  ${actual}`);
};
