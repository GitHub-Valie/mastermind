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

let randomNumber = randomizeInt(0, 100);
// console.log(randomNumber);