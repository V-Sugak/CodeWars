function setAlarm(employed, vacation) {
    return employed && !vacation;
}

function setAlarm(employed, vacation) {
    if ((employed === true && vacation === true) ||
        (employed === false && vacation === false)
        || (employed === false && vacation === true)) { return false }
    else { return true }
}