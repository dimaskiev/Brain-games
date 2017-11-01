import { greeting, toGame} from '..';

export default () => {
  const gameName = 'Answer "yes" if number even otherwise answer "no".';
  toGame(greeting(gameName), 'even');
};