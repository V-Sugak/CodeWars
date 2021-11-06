function friend(friends) {
    return friends.filter(i => i.length === 4 && /\D+/g.test(i))
}