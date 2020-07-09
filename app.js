// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

const playButton = document.querySelector('button');
const didYouWin = document.querySelector('win-lose');

// const totalWin = document.querySelector("total-wins");
// const totalLoss = document.querySelector("total-losses");
// const totalDraw = document.querySelectorAll(total-draws);

// initialize state
// let wins = 0;
// let losses = 0;
// let draws = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const didYouWin = getRandomThrow();
    console.log(didYouWin);
});

//compare user selection to the correct selection