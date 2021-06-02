// Générer un code 
let code = [0, 0, 0, 0];

// console.log(code.length);

// Inputs: un nombre entier minimum et un maximum
function randomizeInt(min, max) {
    // Math.random a une valeur comprise entre 0 et 0.99999999999999, autrement dit [0, 1)
    // (max - min + 1) représente le nombre d'entiers possiblement générés -> 6 - 1 + 1 = 6
    // Math.floor(Math.random() * (max - min + 1) se trouve dans [0, max - min + 1)
    // En ajoutant "+ min" on obtient un nombre qui se trouve dans [min, max - min + 1 + min]
    // Autrement dit [min, max + 1)
    // Enfin, en ajoutant Math.floor(), les valeurs possibles se limitent aux entiers
    // qui sont dans l'intervalle [min, max + 1), c'est à dire, pour un entier : {min, ... max}
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomCode = function () {

    // Longueur de la suite à décoder
    codeLength = 4;

    // console.log(codeLength);

    // Effacer la zone d'affichage
    document.getElementById('displayGeneratedCode').innerHTML = "... generating code ..." + '<br>';
    // document.getElementById('displayGeneratedCode').innerHTML += '<br>';

    // Pour i allant de 1 à codeLength
    for (let i = 1; i <= codeLength ; i += 1) {

        let randomInt = randomizeInt(1, 6);

        // Remplir le code avec les entiers générés
        code[i - 1] = randomInt;

        // console.log(randomInt);
        if (randomInt == 1) {
            console.log('red');
            // document.getElementById('displayGeneratedCode').innerHTML += " red ";
        } else {
            if (randomInt == 2) {
                console.log('green');
                // document.getElementById('displayGeneratedCode').innerHTML += " green ";
            } else {
                if (randomInt == 3) {
                    console.log('blue');
                    // document.getElementById('displayGeneratedCode').innerHTML += " blue ";
                } else {
                    if (randomInt == 4) {
                        console.log('yellow');
                        // document.getElementById('displayGeneratedCode').innerHTML += " yellow ";
                    } else {
                        if (randomInt == 5) {
                            console.log('brown');
                            // document.getElementById('displayGeneratedCode').innerHTML += " brown ";
                        } else {
                            if (randomInt == 6) {
                                console.log('orange');
                                // document.getElementById('displayGeneratedCode').innerHTML += " orange ";
                            }
                        }
                    }
                }
            }
        }

    }
    
    document.getElementById('displayGeneratedCode').innerHTML += '... code has been generated ...' + '<br>';

}

document.getElementById('generateCode').addEventListener('click', randomCode, false);
