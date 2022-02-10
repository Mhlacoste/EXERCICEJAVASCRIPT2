let trials = 0,
    answer = 0;

function GreetUser() {
    // DISPLAY greet label

    // DISPLAY difficulty level choice buttons

    // CALL listenDifficultyChoiceButtonsClick
    
}

function listenDifficultyChoiceButtonsClick() {
    // ON very easy difficulty choice buttons click event
    // CALL OnDifficultyChoiceSelected WITH very easy difficulty

    // ON easy difficulty choice buttons click event
    // CALL OnDifficultyChoiceSelected WITH easy difficulty

    // ON medium difficulty choice buttons click event
    // CALL OnDifficultyChoiceSelected WITH medium difficulty

    // ON difficult difficulty choice buttons click event
    // CALL OnDifficultyChoiceSelected WITH difficult difficulty

    // ON very difficult difficulty choice buttons click event
    // CALL OnDifficultyChoiceSelected WITH very difficult difficulty
}

function OnDifficultyChoiceSelected(difficulty) {
    // HIDE greet label

    // HIDE difficulty level choice buttons

    // CASE difficulty OF 
        // very easy:
            // SET trials TO Infinity
            // SET max number TO 10
        // easy:
            // SET trials TO 5
            // SET max number TO 10
        // medium:
            // SET trials TO 5
            // SET max number TO 100
        // difficult:
            // SET trials TO 8
            // SET max number TO 500
        // very difficult:
            // SET trials TO 9
            // SET max number TO 1000
    // ENDCASE 

    // CALL chooseAnswer WITH max number
    // CALL displayQuestion WITH max number
    // CALL displayAnswerField
}

function displayQuestion(maxNumber) {
    // SET question text of label using max number

    // DISPLAY question label

}

function displayAnswerField() {
    // DISPLAY answer field and answer button

    // ON answer button click event
    // CALL checkAnswer
}

function chooseAnswer(maxNumber) {
    // GET a random number between 1 and max number

    // SET answer TO the random number

}

function checkAnswer(trials, maxNumber) {
    // READ the user answer FROM the answer field

    // IF user answer = answer THEN
        // CALL endGame WITH true as success
    // ELSE
        // SET trials TO trials - 1   
        // IF trials > 0 THEN
            // IF user answer > answer THEN 
                // Call alertSmallerMessage
            // ELSE  
                // Call alertBiggerMessage 
        // ELSE
            // CALL endGame WITH false as success
        // END IF
    // END IF
}

function alertBiggerMessage() {
    // DISPLAY bigger message TO failed label

    // CALL displayFailedMessage
}

function alertSmallerMessage() {
    // DISPLAY smaller message TO failed label

    // CALL displayFailedMessage
}

function displayFailedMessage() {
    // CLEAR any existing timeout
    // START a timeout OF 2 seconds
    // ON timeout END
        // HIDE failed label
}

function AlertSuccessMessage() {
    // SET success message

    // DISPLAY success message TO result label

}

function AlertFailedMessage() {
    // SET failed message WITH answers 

    // DISPLAY failed message TO result label
}

function displayContinue() {
    // DISPLAY Do you want to continue playing?
    // DISPLAY buttons "Yes" and "No"
        //On "Yes" button click event 
            // HIDE result label
            // CALL GreetUser
        // ON "No" button click event
            // QUIT the program 
}

function endGame(success) {
    // IF success = true THEN
        // CALL AlertSuccessMessage
    // ELSE
        // CALL AlertFailedMessage
    // END IF

    // CALL displayContinue
}