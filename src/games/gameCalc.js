import { greeting, toGame } from '..';

export default () => {
  const gameName = 'What is the result of the expression?';
  toGame(greeting(gameName), 'calc');
};

