export function simple() {

    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const counterEl = document.getElementById('counter');
    let counter = 0;

    let computerGuess = Math.floor(Math.random() * 100);

    guessBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let userGuess = parseInt(guessInput.value);

        if (userGuess <= 100 && userGuess > 0) {

            counter++;
            counterEl.style.display = "block";
            counterEl.textContent = `Try: ${counter}`;

            if (userGuess == computerGuess) {
                message.textContent = `You guess it!`;

            } else if (userGuess < computerGuess) {
                message.textContent = `${userGuess} is Too Low!`;
                message.className = 'low';
                guessInput.value = '';

            } else if (userGuess > computerGuess) {
                message.textContent = `${userGuess} is Too High!`;
                message.className = 'high'
                guessInput.value = '';
            }

        } else {
            message.textContent = `Invalid input! Try again...`;
        }
    })

}