document.addEventListener('DOMContentLoaded', function () {

    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessButton');
    const message = document.getElementById('message');

    let computerGuess = Math.floor(Math.random() * 100);

    guessBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let userGuess = parseInt(guessInput.value);

        if (userGuess <= 100 && userGuess > 0) {

            if (userGuess == computerGuess) {
                message.textContent = `You guess it!`;

            } else if (userGuess < computerGuess) {
                message.textContent = `${userGuess} is Too Low!`;
                guessInput.value = '';

            } else if (userGuess > computerGuess) {
                message.textContent = `${userGuess} is Too High!`;
                guessInput.value = '';
            }

        } else {
            message.textContent = `Invalid input! Try again...`;
        }
    })

})


