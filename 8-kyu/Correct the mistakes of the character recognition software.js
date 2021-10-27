function correct(string) {
    return string.replace(/0/g, "O")
        .replace(/5/g, "S")
        .replace(/1/g, "I");
}


function correct(string) {
    return string.split('').map(i => {
        if (i === '0') { return 'O' }
        else if (i === '5') { return 'S' }
        else if (i === '1') { return 'I' }
        else { return i }
    }).join('');
}