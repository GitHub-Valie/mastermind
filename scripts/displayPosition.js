// Afficher un bon positionnement de couleur
let displayRightPosition = function () {
    
    let userGuess = [0, 0, 0, 0];
    
    userGuess[0] = document.getElementById('color1').value;
    userGuess[1] = document.getElementById('color2').value;
    userGuess[2] = document.getElementById('color3').value;
    userGuess[3] = document.getElementById('color4').value;

    for (let i = 1; i <= codeLength; i += 1) {
        let guessedInt = userGuess[i - 1];

        if (guessedInt == 1) {
            document.getElementById('displayRightPositioning').innerHTML += " red ";
        } else {
            if (guessedInt == 2) {
                document.getElementById('displayRightPositioning').innerHTML += " green ";
            } else {
                if (guessedInt == 3) {
                    document.getElementById('displayRightPositioning').innerHTML += " blue ";
                } else {
                    if (guessedInt == 4) {
                        document.getElementById('displayRightPositioning').innerHTML += " yellow ";
                    } else {
                        if (guessedInt == 5) {
                            document.getElementById('displayRightPositioning').innerHTML += " brown ";
                        } else {
                            if (guessedInt == 6) {
                                document.getElementById('displayRightPositioning').innerHTML += " orange ";
                            }
                        }
                    }
                }
            }
        }
    }

    let rightPositionCount = 0;

    for (let index = 0; index < 4; index += 1) {
        if (userGuess[index] == code[index]) {
            rightPositionCount = rightPositionCount + 1;
        }
    }

    if (rightPositionCount == 4) {
        alert("You have cracked the code!")
    } else {
        document.getElementById('displayRightPositioning').innerHTML += 'You have ' + rightPositionCount + ' in the right position.' + '<br>';
    }

}

document.getElementById('showHints').addEventListener('click', displayRightPosition, false);