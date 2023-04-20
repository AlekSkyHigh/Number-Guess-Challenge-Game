export function simple() {

    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessButton');
    const feedback = document.getElementById('feedback');
    const counterEl = document.getElementById('counter');
    let counter = 0;

    const simpleBackBtn = document.getElementById('simpleBackBtn');
    simpleBackBtn.addEventListener('click', () => {
        location.reload()
    })

    let computerGuess = Math.floor(Math.random() * 100);

    guessBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let userGuess = parseInt(guessInput.value);

        if (userGuess <= 100 && userGuess > 0) {

            counter++;
            counterEl.style.display = "block";
            counterEl.textContent = `Guess Count: ${counter}`;

            if (userGuess == computerGuess) {
                feedback.style.display = "none";
                const winner = document.getElementById('winner');
                winner.textContent = `You're the winner! Congrats!`;
                winner.style.display = "block";

            } else if (userGuess < computerGuess) {
                feedback.textContent = `The number is higher \u2B06 than ${userGuess}, keep guessing!`;
                feedback.className = 'low';
                guessInput.value = '';

            } else if (userGuess > computerGuess) {
                feedback.textContent = `The number is lower \u2B07 than ${userGuess}, keep guessing!`;
                feedback.className = 'high'
                guessInput.value = '';
            }

        } else {
            feedback.textContent = `\u2717 Invalid input! Try again...`;
            feedback.className = 'invalid'
        }
    })

}