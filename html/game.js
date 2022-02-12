let trials = 0,
    maxNumber = 0,
    answer = 0;

function displayMessage(message) {
    $("#message").html(message);
}

function greetUser() {
    // DISPLAY "Hello, are you ready to play the guessing game?"
    displayMessage("Hello, are you ready to play the guessing game?<br/>Please choose your difficulty:");
    // DISPLAY "Please choose your difficulty: (button choice difficulty)"
    $("#buttonContainer").show();

    // CALL listenDifficultyChoiceButtonsClick
    listenDifficultyChoiceButtonsClick();
}

function listenDifficultyChoiceButtonsClick() 
{
    // IF user click button very easy difficulty choice THEN
    //     CALL OnDifficultyChoiceSelected WITH very easy difficulty
    $("#veryEasyButton").off('click').click(function() {
        OnDifficultyChoiceSelected("very easy");
    });
    
        // ELSE user click button easy difficulty choice THEN
    //     CALL OnDifficultyChoiceSelected WITH easy difficulty
    $("#easyButton").off('click').click(function() {
        OnDifficultyChoiceSelected("easy");
    });

    // ELSE user click button medium difficulty choice THEN
    //     CALL OnDifficultyChoiceSelected WITH medium difficulty
    $("#mediumButton").off('click').click(function() {
        OnDifficultyChoiceSelected("medium");
    });

    // ELSE user click difficult difficulty choice THEN
    //     CALL OnDifficultyChoiceSelected WITH difficult difficulty
    $("#difficultButton").off('click').click(function() {
        OnDifficultyChoiceSelected("difficult");
    });

    // ELSE user click very difficult difficulty choice THEN
    //     CALL OnDifficultyChoiceSelected WITH very difficult difficulty
    $("#veryDifficultButton").off('click').click(function() {
        OnDifficultyChoiceSelected("very difficult");
    });


    // ENDIF
}

function OnDifficultyChoiceSelected(difficulty) {
    //     HIDE greet label
    displayMessage("");

    //     HIDE difficulty level choice buttons
    $("#buttonContainer").hide();

    //     CASE difficulty OF 
    //         very easy:
    //             SET trials TO 100000
    //             SET max number TO 10
        switch(difficulty) {
        case "very easy":
            trials = 100000;
            maxNumber = 10;
            break;
    //         easy:
    //             SET trials TO 5
    //             SET max number TO 10
        case "easy":
            trials = 5;
            maxNumber = 10;
            break;
    //         medium:
    //             SET trials TO 5
    //             SET max number TO 100
        case "medium":
            trials = 5;
            maxNumber = 100;
            break;
    //         difficult:
    //             SET trials TO 8
    //             SET max number TO 500
        case "difficult":
            trials = 8;
            maxNumber = 500;
            break;
    //         very difficult:
    //             SET trials TO 9
    //             SET max number TO 1000
        case "very difficult":
            trials = 9;
            maxNumber = 1000;
            break;
    }//     ENDCASE

    //     CALL chooseAnswer WITH (max number)
    chooseAnswer();
    //     CALL displayQuestion WITH (max number)
    displayQuestion();
    //     CALL displayAnswerField
    displayAnswerField();
}

function displayQuestion() { 
    // SET question text of label using max number
    // DISPLAY "Guess the number that is between 1 and (max number)"
    displayMessage("Guess the number that is between 1 and " + maxNumber);
}

function displayAnswerField() {
    // DISPLAY answer field 
    // DISPLAY answer buttons
    $("#answerFieldContainer").show();
    $("#answerField").off('focus').on('focus', function() {
        $("#answerField").val('');
        displayQuestion();
    });

    // ON answer button click event
    // CALL checkAnswer
    $("#answerForm").off('submit').on('submit', function(e) {
        e.preventDefault();
        checkAnswer();
    });
}

function chooseAnswer() { 
    // GET a random number between 1 and max number
    // SET answer TO the random number
    answer = Math.floor(Math.random() * (maxNumber - 1 + 1) + 1);
} 

function checkAnswer() { 
    // READ the user answer FROM the answer field
    let userAnswer = parseInt($("#answerField").val());
    $("#answerField").val("");

    if (!isNaN(userAnswer)) {
        // IF user answer = answer THEN
        if (userAnswer == answer) {
            //     CALL endGame WITH true as success
            endGame(true);
        }
        // ELSE
        else {
            //     SET trials TO trials - 1   
            trials--;
            //     IF trials > 0 THEN
            if (trials > 0) {
                //         IF user answer > answer THEN 
                if (userAnswer > answer) {
                    //             Call alertSmallerMessage
                    alertSmallerMessage();
                }
                //         ELSE  
                else {
                    //             Call alertBiggerMessage 
                    alertBiggerMessage();
                }
            }
            //     ELSE
            else {
                //         CALL endGame WITH false as success
                endGame(false);
            }//     END IF
        }// END IF
        
    }
}

function alertBiggerMessage() {
    // DISPLAY "the number is bigger" TO failed label
    // CALL displayFailedMessage
    displayFailedMessage("The number is bigger");
}

function alertSmallerMessage() {
    // DISPLAY "the number is smaller" TO failed label
    // CALL displayFailedMessage
    displayFailedMessage("The number is smaller");
}

function displayFailedMessage(message) {
    displayMessage(message);
}

function alertSuccessMessage() {
    // SET success message
    // DISPLAY "Congratulations you found the right number!"
    displayMessage("Congratulations you found the right number!");
}

function alertFailedMessage() {
    // SET failed message TO result label 
    // DISPLAY "Game over" WITH answer
    displayMessage("Game over<br/>The correct answer was: " + answer);
}

function displayContinue() {
    // DISPLAY "Do you want to continue playing?"
    // DISPLAY buttons "Yes" and "No"
    $("#continueContainer").show();
    //     IF user click on "Yes" button THEN
    $("#restartButton").off('click').click(function() {
        //         HIDE result label
        displayMessage("");
        $("#continueContainer").hide();
        //         CALL GreetUser
        greetUser();
    });
    
    //     ELSE user clik on "No" button THEN
    $("#quitButton").off('click').click(function() {
        //         QUIT the program 
        $("#continueContainer").hide();
        displayMessage("Thanks for playing!");
    });
    
    
}

function endGame(success) {  
    // HIDE answer fields
    $("#answerFieldContainer").hide();
    $("#answerField").val('');

    // IF success = true THEN
    if (success) {
        //     CALL alertSuccessMessage
        alertSuccessMessage();
    }
    // ELSE
    else {
        //     CALL alertFailedMessage
        alertFailedMessage();
    } // END IF

    // CALL displayContinue
    displayContinue();
}

$(document).ready(greetUser);
