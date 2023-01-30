const userNome = prompt("Inserisci nome")
const userCognome = prompt("Inserisci cognome")
const favouriteColor = prompt ("Inserisci il tuo colore preferito")

const outputMsg = `Grazie, 
la password sicura è: ${userNome + userCognome + favouriteColor}21`;
console.log(outputMsg);

document.getElementById('output_msg').innerHTML = outputMsg