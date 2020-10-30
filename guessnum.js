const playAgain = document.querySelector(".overlay button");

function playGame() {

    function buttonsDisabled() {
        for (const buttonDisabled of allButtons) {
            buttonDisabled.disabled = true;
        }
    }

    function buttonsEnabled() {
        for (const buttonEnabled of allButtons) {
            buttonEnabled.disabled = false;
            buttonEnabled.style.borderColor = "white";
        }
    }

    function buttonGuess() {
        buttonsDisabled();

        if (this.textContent == randomNumber) {
            for (const everyButton of allButtons) {
                everyButton.style.borderColor = "greenyellow";
            }

            numberDisplay.style.transform = "rotateY(360deg)";
            numberDisplay.style.opacity = "1";
            numberDisplay.textContent = randomNumber;
            numberDisplay.style.transition = "transform 1s ease-out, opacity 2s ease-out";

            overlayh2.textContent = "You guessed right!";
            

        } else {
            for (const everyButton of allButtons) {
                everyButton.style.borderColor = "red";
            }

            numberDisplay.style.transform = "rotateY(360deg)";
            numberDisplay.style.opacity = "1";
            numberDisplay.textContent = randomNumber;
            numberDisplay.style.transition = "transform 1s ease-out, opacity 2s ease-out";

            overlayh2.textContent = "So close!";
        }

        overlay.style.transform = "scale(1)";
        overlay.style.transition = "transform 0.5s ease-out 1.5s";
    }

    const getButtons = document.querySelectorAll(".buttons button");
    const allButtons = Array.from(getButtons);
    const numberDisplay = document.querySelector(".number");
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    
    const overlay = document.querySelector(".overlay");
    const overlayh2 = document.querySelector(".overlay h2");

    buttonsEnabled();
    overlay.style.transform = "scale(0)";
    overlay.style.transition = "transform 0.5s ease-out 0.2s";
    numberDisplay.style.transform = "rotateY(0deg)";
    numberDisplay.style.opacity = "1";
    numberDisplay.textContent = "?";
    numberDisplay.style.transition = "transform 1s ease-out, opacity 2s ease-out";

    for (const button of allButtons) {
        button.addEventListener("click", buttonGuess);
    }
}

playGame();
playAgain.addEventListener("click", playGame);
