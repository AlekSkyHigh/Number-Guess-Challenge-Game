export function simple() {

    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessButton');
    const message = document.getElementById('message');
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
                message.textContent = `You guess it!`;

            } else if (userGuess < computerGuess) {
                message.textContent = `The number is higher \u2B06 than ${userGuess}, keep guessing!`;
                message.className = 'low';
                guessInput.value = '';

            } else if (userGuess > computerGuess) {
                message.textContent = `The number is lower \u2B07 than ${userGuess}, keep guessing!`;
                message.className = 'high'
                guessInput.value = '';
            }

        } else {
            message.textContent = `Invalid input! Try again...`;
        }
    })

}