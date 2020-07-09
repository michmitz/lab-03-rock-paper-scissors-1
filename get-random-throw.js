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