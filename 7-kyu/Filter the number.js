const FilterString = value => +value.replace(/\D/g, '');

var FilterString1 = function (value) {
    return Number(value.match(/\d+/g).join(''))
}