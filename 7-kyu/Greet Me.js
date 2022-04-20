var greet = function (name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};

var greet = function (name) {
    let arr = name.toLowerCase().split('');
    arr[0] = arr[0].toUpperCase()
    return `Hello ${arr.join('')}!`
};