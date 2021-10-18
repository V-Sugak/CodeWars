function rentalCarCost(d) {
    return d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
}


function rentalCarCost(d) {
    let price;
    if (d <= 2) { price = 40 * d }
    else if (d < 7) { price = 40 * d - 20 }
    else if (d >= 7) { price = 40 * d - 50 }
    return price;
}