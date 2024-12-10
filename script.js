function turnOnRed() {
    resetLights();
    document.getElementById('red-light').style.opacity = 1;
    setTimeout(cycleToYellow, 5000); // 5 seconds
}

function turnOnYellow() {
    resetLights();
    document.getElementById('yellow-light').style.opacity = 1;
    setTimeout(cycleToGreen, 2000); // 2 seconds
}

function turnOnGreen() {
    resetLights();
    document.getElementById('green-light').style.opacity = 1;
    setTimeout(cycleToRed, 5000); // 5 seconds
}

function cycleToRed() {
    turnOnRed();
}

function cycleToYellow() {
    turnOnYellow();
}

function cycleToGreen() {
    turnOnGreen();
}

function resetLights() {
    document.getElementById('red-light').style.opacity = 0.3;
    document.getElementById('yellow-light').style.opacity = 0.3;
    document.getElementById('green-light').style.opacity = 0.3;
}
