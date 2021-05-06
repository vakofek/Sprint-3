
export const utilService = {
    makeId,
    makeLorem,
    getRandomInt,
    randomDate,
    getRandomColor
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate() {
    var start = new Date(getRandomInt(2000, 2021), 0, 1);
    var end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomColor() {
    var colors = ['red', 'unset', 'blue', 'unset', 'green', 'unset', 'yellow', 'unset', 'unset', 'purple', 'unset', 'pink', 'orange']
    return colors.splice(getRandomInt(0, 12), 1)
}