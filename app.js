// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './throwUtils.js';

const playButton = document.querySelector('#button');
const didYouWin = document.querySelector('#win-lose');

const totalWin = document.querySelector('#total-wins');
const totalLoss = document.querySelector('#total-losses');
const totalDraw = document.querySelector('#total-draws');

// initialize state
let wins = 0;
let draws = 0;
let losses = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const computerThrow = getRandomThrow();
    const userSelect = document.querySelector('input:checked');
    const userThrow = userSelect.value;
    const result = checkResult(userThrow, computerThrow);

    if (result === 'win') {
        wins++;
        didYouWin.textContent = 'You won!';
    } else if (result === 'lose') {
        losses++;
        didYouWin.textContent = 'You loser!';
    } else if (result === 'draw') {
        draws++;
        didYouWin.textContent = "It's a draw!";
    }

    totalWin.textContent = 'Total Wins: ' + wins;
    totalLoss.textContent = 'Total Losses: ' + losses;
    totalDraw.textContent = 'Total Draws: ' + draws;

});

//compare user selection to the correct selection