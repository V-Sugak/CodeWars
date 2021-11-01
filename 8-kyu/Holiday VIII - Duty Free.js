function dutyFree(normPrice, discount, hol) {
    let discountMoney = normPrice * discount / 100
    return Math.floor(hol / discountMoney)
}