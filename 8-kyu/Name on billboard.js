function billboard(name, price = 30) {
    var totalCost = 0;
    for (i = 0; i < name.length; i++) {
        totalCost += price;
    }
    return totalCost;
}


function billboard(name, price = 30) {
    let n = name.length;
    let count = 0;
    while (n > 0) {
        count += price;
        n--;
    }
    return count
}