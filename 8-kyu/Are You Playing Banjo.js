function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

function areYouPlayingBanjo(name) {
    const play = /^r/i
    if (play.test(name)) { return name + " plays banjo" }
    else { return name + " does not play banjo" }
}