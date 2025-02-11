// JavaScript Program to Generate Random String

const randomStringVal = document.getElementById('randomString')
const generateRandomString = () => {
    const stringSize = parseInt(document.getElementById('size').value);
    const stringCharacters = ' 0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz'
    const size = stringCharacters.length
    let randomString = ''
    for (let i = 0; i < stringSize; i++) {
        randomString += stringCharacters[Math.floor(Math.random() * size)]
    }
    return randomString;
}


const createRandomString = () => randomStringVal.innerText = `${generateRandomString()}`

document.querySelector('#create').addEventListener('click', createRandomString)
