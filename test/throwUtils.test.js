import { getRandomThrow, checkResult } from '../throwUtils.js';

const test = QUnit.test;

test('getRandomThrow function', (expect) => {
    // const expected = true;

    const actual = getRandomThrow();

    //assert.equal(expected, actual === 'rock' || actual === 'paper' || actual === 'scissors');
    expect.ok(actual === 'rock' || actual === 'paper' || actual === 'scissors');
});

test('should return "draw" if passed "rock" and "rock"', (expect) => {
    const expected = 'draw';

    const actual = checkResult('rock', 'rock');

    expect.equal(expected, actual);
});


