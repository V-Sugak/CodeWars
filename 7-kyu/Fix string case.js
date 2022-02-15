function solve(s) {
    let lowerC = 0;
    let upperC = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase()) {
            upperC++;
        }
        else {
            lowerC++;
        }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}

function solve(s) {
    let upperCase = 0;
    let lowerCase = 0;
    const arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toLowerCase()) {
            lowerCase++
        } else { upperCase++ }
    }

    return lowerCase > upperCase || lowerCase === upperCase ?
        arr.map(j => j.toLowerCase()).join('') : arr.map(j => j.toUpperCase()).join('');
}