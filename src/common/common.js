/* get random numbers */
export const getNumbers = (n) => {
  const date = new Date();
  const number = [];
  for (let i = 0; i < n; i += 1) {
    number[i] = Math.floor((Math.random(1) * 150) + (date.getDate() * (150 / 10)));
  }
  return number;
};

export const getResultGcd = (numOne, numTwo) => {
  const getGcd = (numberOne, numberTwo, count, gmc) => {
    const counter = count;
    if ((counter === numberOne) || (counter === numberTwo)) return gmc;

    if (((numberOne % counter) === 0) && (numberTwo % counter) === 0) {
      return getGcd(numberOne, numberTwo, counter + 1, counter);
    }
    return getGcd(numberOne, numberTwo, counter + 1, gmc);
  };

  const answers = [];
  const question = [];
  for (let i = 0; i < numOne.length; i += 1) {
    const count = 1;
    const gmc = 1;
    if ((numOne[i] === 0) || (numTwo[i] === 0)) return 0;
    answers[i] = getGcd(numOne[i], numTwo[i], count, gmc);
    question[i] = `${numOne[i]} ${numTwo[i]}`;
  }
  return { answers, question };
};
