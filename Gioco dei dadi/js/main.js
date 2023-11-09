"use strict";

//genero numero random da 1 a 6 sia per giocatore che per computer
const numeroGiocatore = Math.floor(Math.random() * 6 + 1);
console.log("Numero giocatore: ", numeroGiocatore);
const numeroComputer = Math.floor(Math.random() * 6 + 1);
console.log("Numero computer: ", numeroComputer);

//confronto i due numeri
if (numeroGiocatore > numeroComputer) {
  console.log("Giocatore vince!");
} else if (numeroGiocatore < numeroComputer) {
  console.log("Computer vince!");
} else {
  console.log("Parità!");
}
