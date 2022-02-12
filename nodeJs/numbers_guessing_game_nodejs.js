var prompt = require('prompt-sync')();

function main() {
    greetUser();
    let difficulty = readDifficulty();
    let {trials, maxNumber} = setDifficultyLevel(difficulty);
    let answer = chooseAnswer(maxNumber);
    displayQuestion(maxNumber);
    readUserAnswer(trials, answer);
}

function greetUser() {
    process.stdout.write("Hello, are you ready to play the guessing game?\n");
}

function readDifficulty() {
    process.stdout.write("Please choose a difficulty (1 = Very easy, 2 = Easy, 3 = Medium, 4 = Hard, 5 = Very Hard):\n");
    let difficulty = parseInt(prompt()) || 1;
    return difficulty;
}

function setDifficultyLevel(difficulty) {
    let trials = 0;
    let maxNumber = 0;

    switch(difficulty) {
        case 1:
            trials = 1000000;
            maxNumber = 10;
            break;
        case 2:
            trials = 5;
            maxNumber = 10;
            break;
        case 3:
            trials = 5;
            maxNumber = 100;
            break;
        case 4:
            trials = 8;
            maxNumber = 500;
            break;
        case 5:
            trials = 9;
            maxNumber = 1000;
            break;
    }

    return { trials, maxNumber };
}

function chooseAnswer(maxNumber) { 
    return Math.floor(Math.random() * maxNumber + 1);
}

function displayQuestion(maxNumber) { 
    process.stdout.write(`Guess the number that is between 1 and ${maxNumber}\n`);
}

function readUserAnswer(trials, answer) { 
    let playing = true;
    let userAnswer = "";
    let success = false;

    while (playing) {
        userAnswer = parseInt(prompt()) || -1;

        success = checkAnswer(userAnswer, answer); 

        if (success) {
            endGame(success, answer);
            playing = false;
        } else {
            trials--;
            if (trials <= 0) {
                endGame(success, answer);
                playing = false;
            } else {
                displayError(userAnswer, answer);
            }
        }
    }
}

function checkAnswer(userAnswer, answer) { 
    return userAnswer == answer;
}

function displayError(userAnswer, answer) { 
    if (userAnswer > answer)
        process.stdout.write("The number is lower!\n");
    else 
        process.stdout.write("The number is bigger!\n");
}

function endGame(success, answer) { 
    if (success) {
        process.stdout.write("Congratulations you found the right number!\n");
    } else {
        process.stdout.write(`Game over ... The correct answer was ${answer}\n`);
    }
    displayContinue();
}

function displayContinue() {
    process.stdout.write("Do you want to continue playing? (1 = Yes, 2 = No)\n");
    let continuePlaying = parseInt(prompt()) || 2;

    if (continuePlaying == 1)
        main();
    else 
        process.exit();
}

main();