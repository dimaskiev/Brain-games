import { greeting, toGame } from '..';

export default () => {
  const gameName = 'Find the greatest common divisor of given numbers.';
  toGame(greeting(gameName), 'gcd');
};
