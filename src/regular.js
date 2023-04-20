export function regular() {

    const guessInput = document.getElementById('regularGuessInput');
    const guessBtn = document.getElementById('regularGuessButton');
    const feedback = document.getElementById('regularFeedback');
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
                    feedback.style.display = "none";
                    const winner = document.getElementById('regularWinner');
                    winner.textContent = `You're the winner!`;
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

        } else {
            const magicNumber = document.getElementById('magicNumber');
            magicNumber.textContent = `The magic number is ${computerGuess}.`;

            const regularMain = document.getElementById('regularMain');
            const failedScreen = document.getElementById('failed');
            regularMain.style.display = "none";
            failedScreen.style.display = "block";

            document.getElementById('tryAgain').addEventListener('click', () => {

                regularMain.style.display = "block";
                failedScreen.style.display = "none";

                counter = 0;
                counterEl.textContent = "";
                feedback.textContent = "";
                guessInput.value = "";
            })
        }


    })

}