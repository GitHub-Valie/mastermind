let cheatCode = function () {

    // let codeLength = document.getElementById('in').value;
    codeLength = 4;

    document.getElementById('displayCheat').innerHTML = 'code: ';
    document.getElementById('displayCheat').innerHTML += '<br>';

    for (let i = 1; i <= codeLength; i += 1) {
        document.getElementById('displayCheat').innerHTML += ' ' + code[i - 1];
    }

}

document.getElementById('cheatCode').addEventListener('click', cheatCode, false);
