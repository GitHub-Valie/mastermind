let displayGreaterOrLess = function () {

    let userGuessedNumber = document.getElementById('userGuess').valueAsNumber;

    let userTries = 0;
    console.log(randomNumber);
    console.log(userGuessedNumber);

    document.getElementById('displayNumberHint').innerHTML = '';

    if (randomNumber > userGuessedNumber) {
        document.getElementById('displayNumberHint').innerHTML += 'Greater than ' + userGuessedNumber;
        userTries += 1;
    } else {
        if (randomNumber < userGuessedNumber) {
            document.getElementById('displayNumberHint').innerHTML += 'Less than ' + userGuessedNumber;
            userTries += 1;
        } else {
            if (randomNumber == userGuessedNumber) {
                userTries += 1;
                document.getElementById('displayNumberHint').innerHTML += randomNumber + '! You guessed it!';
                console.log(userTries);
            }
        }
    }
}

document.getElementById('showNumberHint').addEventListener('click', displayGreaterOrLess, false);