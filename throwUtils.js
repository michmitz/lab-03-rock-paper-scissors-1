export function getRandomThrow() {
    const choice = Math.ceil(Math.random() * 3);
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if (choice === 3) {
        return 'scissors';
    } 
}
console.log(getRandomThrow());

export function checkResult(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    } else if (player === 'scissor' && computer === 'rock') {
        return 'lose';
    } else if (player === 'scissor' && computer === 'paper') {
        return 'win';
    }
}