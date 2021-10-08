const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);





var min = function (list) {
    return Math.min.apply(Math, list);
}

var max = function (list) {
    return Math.max.apply(Math, list);
}