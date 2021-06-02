let displayGreaterOrLess = function () {

    let userGuessedNumber = document.getElementById('userGuess').valueAsNumber;

    console.log(randomNumber);
    console.log(userGuessedNumber);

    document.getElementById('displayNumberHint').innerHTML = '';

    if (randomNumber > userGuessedNumber) {
        document.getElementById('displayNumberHint').innerHTML += 'Greater than ' + userGuessedNumber;
    } else {
        if (randomNumber < userGuessedNumber) {
            document.getElementById('displayNumberHint').innerHTML += 'Less than ' + userGuessedNumber;
        } else {
            if (randomNumber == userGuessedNumber) {
                document.getElementById('displayNumberHint').innerHTML += randomNumber + '! You guessed it!';
            }
        }
    }
}

document.getElementById('showNumberHint').addEventListener('click', displayGreaterOrLess, false);