
let value = 0;
let firstUpgrade = 0;
let secondUpgrade = 0;
let thirdUpgrade = 0;
let fourthUpgrade = 0;
let fifthUpgrade = 0;

function clickForCookie() {
    value += 1;
    document.getElementById("cookies").innerHTML = value + " cookies";
}
function incrementalUpdate() {
    value += firstUpgrade * 1;
    value += secondUpgrade * 5;
    value += thirdUpgrade * 10;
    value += fourthUpgrade * 20;
    value += fifthUpgrade * 100;
    updateValue();
}
function updateValue() {
    document.getElementById("cookies").innerHTML = value + " cookies";
}
function buyFirst() {
    if (value >= 10) {
        value -= 10;
        firstUpgrade++;
        document.getElementById('firstUpgrade').innerHTML = "you own " + firstUpgrade;
        updateValue();
    }
}
function buySecond() {
    if (value >= 100) {
        value -= 100;
        secondUpgrade++;
        document.getElementById('secondUpgrade').innerHTML = "you own " + secondUpgrade;
        updateValue();
    }
}
function buyThird() {
    if (value >= 500) {
        value -= 500;
        thirdUpgrade++;
        document.getElementById('thirdUpgrade').innerHTML = "you own " + thirdUpgrade;
        updateValue();
    }
}
function buyFourth() {
    if (value >= 1000) {
        value -= 1000;
        fourthUpgrade++;
        document.getElementById('fourthUpgrade').innerHTML = "you own " + fourthUpgrade;
        updateValue();
    }
}
function buyFifth() {
    if (value >= 10000) {
        value -= 10000;
        fifthUpgrade++;
        document.getElementById('fifthUpgrade').innerHTML = "you own " + fifthUpgrade;
        updateValue();
    }
}
let intervalID;

function repeatEverySecond() {
  intervalID = setInterval(sendMessage, 1000);
}

function sendMessage() {
  incrementalUpdate();
}
repeatEverySecond();