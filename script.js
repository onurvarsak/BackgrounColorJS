// ENUMS
const HEX_NUMBER = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];



// CONSTS
const btnRGP = document.getElementById("btn-rgp");
const btnHEX = document.getElementById("btn-hex")
const header = document.getElementById("header");
const bodyElement = document.body;



// EVENT LISTENERS
btnRGP.addEventListener('click', () => {
    const colorCode = getRandomRGPCode();
    changeBackgroundColor(colorCode);
    changeHeaderText(colorCode);
})

btnHEX.addEventListener('click', () => {
    const colorCode = getRandomHEXCode();
    changeBackgroundColor(colorCode);
    changeHeaderText(colorCode);
})



// GENERATE FUNCTIONS
function getRandomRGPCode() {
    const codes = []
    for(let i = 0; i < 3; i++){
        codes[i] = getRandomNumber(256);
    }
    return  `rgb(${codes[0]}, ${codes[1]}, ${codes[2]})`;
}

function getRandomHEXCode() {
    let hexCode = '#'
    for(let i = 0; i < 6; i++) {
        hexCode += HEX_NUMBER[getRandomNumber(16)];
    }
    return hexCode;
}



// HELPER FUNCTIONS
function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function changeBackgroundColor(colorCode) {
    bodyElement.style.backgroundColor = colorCode;
}

function changeHeaderText(colorCode) {
    header.innerHTML = `Background Color : ${colorCode}`;
}
