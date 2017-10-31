import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getName = () => {
  const actual = readlineSync.question('What\'s your name?: ');
  return actual;
};

const getNumber = () => {
  const num = Math.floor(Math.random(1)*50);
  return num;
  // return num;
}

const itsEven = (num) =>((num%2)===0)?true:false;

const correctAnswers = (iseven, Answer) =>{
  if ((iseven===true)&&(Answer==='yes')) return true;
   else if ((iseven===false)&&(Answer==='no'))  return true;
    else return false;
}

export const isEven = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = getName();
  let rightAnswer=0, countAnswer = 1;
  
  while(countAnswer<=3){
    const number=getNumber();
    const iseven=itsEven(number);
    const correct = (iseven===true)?'yes':'no';
    console.log(`Question: ${number}`);
    const Answer = readlineSync.question('Answer: ');
    let isTrue = correctAnswers(iseven, Answer);
    if (isTrue){
      console.log('Correct!');
      rightAnswer++;
      countAnswer++;
    } else {
      console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${correct}"`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  if (rightAnswer===3) console.log(`Congratulations, ${userName}`);
};


export default () => {
  getName();
};
