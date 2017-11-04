import { cons } from 'hexlet-pairs';
import { playGames } from '..';
import { getRandomNumber } from '../common/common';


const getQuestion = (startNum, step, lengthProgression, hiddenIndex) => {
  const progressionArray = [];
  progressionArray[0] = startNum;
  for (let i = 1; i < lengthProgression; i += 1) {
    progressionArray[i] = progressionArray[i - 1] + step;
  }
  progressionArray[hiddenIndex] = '..';
  const question = progressionArray.join(' ');
  return question;
};

const gameInit = () => {
  const startNum = getRandomNumber();
  const stepProgression = Math.floor(2 + (Math.random() * 5));
  const hiddenIndexOfNum = Math.floor(1 + (Math.random() * 10)) - 1;
  const lengthProgression = 10;
  const answer = startNum + (hiddenIndexOfNum * stepProgression);
  const question = getQuestion(startNum, stepProgression, lengthProgression, hiddenIndexOfNum);
  return cons(question, answer);
};

export default () => {
  const gameManual = 'What number is missing in this progression?';
  playGames(gameManual, gameInit);
};
