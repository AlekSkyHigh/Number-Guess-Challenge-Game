import { regular } from "./src/regular.js";
import { simple } from "./src/simple.js";

document.addEventListener('DOMContentLoaded', function () {

    const difficultyScreen = document.getElementById('difficulty');
    const simpleBtn = document.getElementById('simpleBtn');
    const simpleMain = document.getElementById('simpleMain');
    const regularBtn = document.getElementById('regularBtn');
    const regularMain = document.getElementById('regularMain');

    simpleBtn.addEventListener('click', () => {
        difficultyScreen.style.display = "none";
        simpleMain.style.display = "block";
        simple();
    })

    regularBtn.addEventListener('click', () => {
        difficultyScreen.style.display = "none";
        regularMain.style.display = "block";
        regular();
    })

})



