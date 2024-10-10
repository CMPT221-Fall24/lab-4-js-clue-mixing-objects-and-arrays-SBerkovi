let suspectsArray = ["Miss Scarlet", "Colonel Mustard", "Mrs. White", "Reverend Green", "Mrs. Peacock", "Professor Plum"];
let weaponsArray = ["Candlestick", "Dagger", "Revolver", "Lead Pipe", "Wrench", "Rope", "Vintage Pocket Watch", "Venomous Dart"];
let roomsArray = ["Kitchen", "Ballroom", "Conservatory", "Dining Room", "Billiard Room", "Library", "Study", "Hall", "Lounge", "Greenhouse"];

function selectRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function pickMystery() {
    let murderer = selectRandom(suspectsArray);
    let murderWeapon = selectRandom(weaponsArray);
    let murderRoom = selectRandom(roomsArray);
    let obj = {suspect: murderer, weapon: murderWeapon, room: murderRoom};
    return obj;
}

function revealMystery(obj) {
    return obj.suspect + " killed Mr. Marist using the " + obj.weapon + " in the " + obj.room + "!";
}

document.getElementById("suspect-display").textContent = revealMystery(pickMystery());