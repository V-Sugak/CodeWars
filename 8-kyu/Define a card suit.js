function defineSuit(card) {
    if (card.includes('♥')) return 'hearts'
    if (card.includes('♦')) return 'diamonds'
    if (card.includes('♣')) return 'clubs'
    if (card.includes('♠')) return 'spades'
}

function defineSuit(card) {
    if (card[card.length - 1] === '♣') { return 'clubs' }
    else if (card[card.length - 1] === '♦') { return 'diamonds' }
    else if (card[card.length - 1] === '♥') { return 'hearts' }
    else if (card[card.length - 1] === '♠') { return 'spades' }
}