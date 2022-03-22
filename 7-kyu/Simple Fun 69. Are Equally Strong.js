function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) &&
        Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight)
}


function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft === friendsLeft && yourRight === friendsRight ||
        yourLeft === friendsRight && yourRight === friendsLeft
}