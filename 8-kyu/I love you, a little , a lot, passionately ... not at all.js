function howMuchILoveYou(nbPetals) {
    let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return petals[(nbPetals - 1) % 6];
}


function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    if (nbPetals < 7) { return arr[nbPetals - 1] }
    else { return howMuchILoveYou(nbPetals - 6) }
}