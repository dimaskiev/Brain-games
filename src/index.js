//var readlineSync = require('readline-sync');
/*
const getsName = () => {
    const readlineSync = require('readline-sync');

    // Wait for user's response.

    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}
export { getsName }*/
import readlineSync from 'readline-sync';
export default () => {
    const actual = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + actual);
}