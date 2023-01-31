export function frontDoorResponse(line) {
    return line.charAt(0);
}

export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export function frontDoorPassword(word) {
    return capitalize(word);
}

export function backDoorResponse(line) {
    line = line.trim();
    return line[line.length - 1];
}

export function backDoorPassword(word) {
    return capitalize(word) + ', please';
}