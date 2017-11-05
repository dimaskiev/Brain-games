/* get random numbers */
export const getRandomNumber = () => {
  const date = new Date();
  const number = Math.floor((Math.random(1) * 50) + (date.getDate() * 5));
  return number;
};

export const findGcd = (numOne, numTwo) => {
  if (numTwo === 0) {
    return numOne;
  }
  return findGcd(numTwo, numOne % numTwo);
};

export const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const isEven = (num) => {
  if ((num % 2) === 0) return true;
  return false;
};

export const getRightAnswer = (rightAnswer) => {
  if (rightAnswer === true) return 'yes';
  return 'no';
};
