var humanYearsCatYearsDogYears = function (y) {
    if (y == 1) { return [1, 15, 15] }
    else if (y == 2) { return [2, 24, 24] }
    else { return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24] }
}

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears;
    let dogYears;
    if (humanYears === 1) { catYears = 15; dogYears = 15 }
    else if (humanYears === 2) { catYears = 24; dogYears = 24 }
    else if (humanYears > 2) {
        let n = humanYears - 2;
        catYears = 24 + 4 * n;
        dogYears = 24 + 5 * n;
    }
    return [humanYears, catYears, dogYears];
}