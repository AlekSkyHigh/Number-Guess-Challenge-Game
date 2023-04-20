export function regular() {

    const guessInput = document.getElementById('regularGuessInput');
    const guessBtn = document.getElementById('regularGuessButton');
    const message = document.getElementById('regularMessage');
    const counterEl = document.getElementById('regularCounter');
    let counter = 0;

    const regularBackBtn = document.getElementById('regularBackBtn');
    regularBackBtn.addEventListener('click', () => {
        location.reload()
    })

    let computerGuess = Math.floor(Math.random() * 150);

    guessBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let userGuess = parseInt(guessInput.value);

        if (counter < 4) {

            if (userGuess <= 150 && userGuess > 0) {

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

        } else {
            const regularMain = document.getElementById('regularMain');
            const failedScreen = document.getElementById('failed');
            regularMain.style.display = "none";
            failedScreen.style.display = "block";

            document.getElementById('tryAgain').addEventListener('click', () => {

                regularMain.style.display = "block";
                failedScreen.style.display = "none";

                counter = 0;
                counterEl.textContent = "";
                message.textContent = "";
                guessInput.value = "";
            })
        }


    })

}