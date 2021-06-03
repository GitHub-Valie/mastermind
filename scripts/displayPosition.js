// Afficher un bon positionnement de couleur
let displayPosition = function () {

    // Les numéros du code peuvent:
    // 1* être dans la séquence
    // 2* être dans la séquence, mais au mauvais endroit
    // 3* ne pas être dans la séquence
    
    // Array à 4 slots dans laquelle on va stocker l'essai de l'utilisateur
    const userGuess = [0, 0, 0, 0];
    
    // Chaque numéro récupéré dans le document HTML est affecté à chaque slot respectif de l'array
    // Remarque: l'indice d'une Array commence à 0 en JS
    userGuess[0] = document.getElementById('color1').value;
    userGuess[1] = document.getElementById('color2').value;
    userGuess[2] = document.getElementById('color3').value;
    userGuess[3] = document.getElementById('color4').value;

    // Copie de la séquence correcte et de l'essai de l'utilisateur
    // const codeCopy = code;
    // const userGuessCopy = userGuess;

    document.getElementById('displayPositionHint').innerHTML += '... ';

    for (let i = 1; i <= code.length; i += 1) {
        let guessedDigit = userGuess[i - 1];

        if (guessedDigit == 1) {
            document.getElementById('displayPositionHint').innerHTML += " 1 / ";
        } else {
            if (guessedDigit == 2) {
                document.getElementById('displayPositionHint').innerHTML += " 2 / ";
            } else {
                if (guessedDigit == 3) {
                    document.getElementById('displayPositionHint').innerHTML += " 3 / ";
                } else {
                    if (guessedDigit == 4) {
                        document.getElementById('displayPositionHint').innerHTML += " 4 / ";
                    } else {
                        if (guessedDigit == 5) {
                            document.getElementById('displayPositionHint').innerHTML += " 5 / ";
                        } else {
                            if (guessedDigit == 6) {
                                document.getElementById('displayPositionHint').innerHTML += " 6 / ";
                            }
                        }
                    }
                }
            }
        }
    }

    // Compteurs de bonnes et mauvaises positions
    let rightPositionCount = 0;
    let wrongPositionCount = 0;

    // Pour savoir si un numéro est placé au bon endroit dans la séquence
    for (let index = 0; index < code.length; index += 1) {
        // On le compare au numéro du code qui se trovue au même indice
        // Si c'est le cas ...
        if (userGuess[index] == code[index]) {
            // On ajoute +1 au compteur de bonnes positions
            rightPositionCount = rightPositionCount + 1;
            // On affecte une valeur qui ne peut pas être prise par le code à ce slot dans les copies de code
            // codeCopy[index] = 99;
            // userGuessCopy[index] = 88;
        }
    }

    // console.log('Code: ', code);
    // console.log('Code copié: ', codeCopy);
    // console.log('Essai: ', userGuess);
    // console.log('Essai copié: ', userGuessCopy);

    // Le code est décodé intégralement quand le compteur de bonnes positions est égal à la longueur du code
    if (rightPositionCount == code.length) {
        // console.log('CODE HAS BEEN CRACKED');
        document.getElementById('displayPositionHint').innerHTML += '<br>' + '... CODE CRACKED ...';
    } else {
        document.getElementById('displayPositionHint').innerHTML += '<br>' + '... ' + rightPositionCount + ' of ' + code.length + ' valid' + '<br />';
    }

    // Pour savoir si un numéro est dans la séquence, mais au mauvais endroit
    // for (let i = 0; i < code.length; i += 1) {
    //     for (let j = 0; j < code.length; j += 1) {
    //         if (codeCopy[j] == userGuessCopy[i]) {
    //             wrongPositionCount = wrongPositionCount + 1;
    //             codeCopy[j] = 99;
    //             userGuessCopy[i] = 88;
    //         }
    //     }
    // }
}

document.getElementById('showHints').addEventListener('click', displayPosition, false);