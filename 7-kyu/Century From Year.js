const century = year => Math.ceil(year / 100)

function century(year) {
    let year1 = String(year);
    if (year1.length < 3) { return 1 }
    else if (year1[year1.length - 1] === '0' && year1[year1.length - 2] === '0') {
        return Number(year1.substr(0, year1.length - 2))
    } else {
        return Number(year1.substr(0, year1.length - 2)) + 1
    }
}