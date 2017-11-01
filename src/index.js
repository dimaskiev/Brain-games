import readlineSync from 'readline-sync';


export const greeting = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  console.log(game);
  const userName = readlineSync.question('What\'s your name?: ');
  return userName;
};

export const printResult = (result, Answer, userName) => {
  console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${result}"`);
  console.log(`Let's try again, ${userName}`);
};

export const getNumber = () => {
  const date = new Date();
  const number = Math.floor(Math.random(1) * 75 + date.getDate() * (date.getDate() + 2) / (date.getDate() * 5));
  return number;
};

export const isEven = (num) => ((num %2 ) === 0)?'yes':'no';

const getAnswer = () => readlineSync.question('Answer: ');

const makeQuestion = (game, numOne, numTwo, operand) => {
  switch(game){
    case 'even':{
      return numOne
    };
    break;
    case 'calc':{
      return `${numOne} ${operand} ${numTwo}`;
    };
    default:
    break;

  }
}

const operands = (count) => {
  if (count === 1) return '+';
  else if (count === 2) return '-';
  return '*';
};


const getResultCals = (numOne, numTwo, operand) => {
  switch (operand) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
    break;
  }
};

const correctAnswers = (game, numOne, numTwo, operand) => {
  switch(game){
    case 'even':{
      return isEven(numOne);
    };
    break;
    case 'calc':{
      return getResultCals (numOne, numTwo, operand);
    };
    default:
    break;

  }
};


export const toGame = (userName, game) => {
  let rightAnswer = 0;
  let countAnswer = 1;
  
  while (countAnswer <= 3) {
    const numOne = getNumber();
    const numTwo = getNumber();
    let question = makeQuestion(game, numOne, numTwo, operands(countAnswer));  
    console.log(`Question: ${question}`);
    const Answer = getAnswer(game);
    const result = correctAnswers(game, numOne, numTwo, operands(countAnswer))
    if (Answer === String(result)){
      console.log('Correct!');
      rightAnswer += 1;
      countAnswer += 1;
    } else {
      printResult(result, Answer, userName);
      return;
    }
  }
  if (rightAnswer === 3) console.log(`Congratulations, ${userName}`);

};
