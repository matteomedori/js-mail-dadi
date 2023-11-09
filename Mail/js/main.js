"use strict";

//creo array di mail valide
const mailValide = ["prova@gmail.com", "matteo@libero.it", "prova@prova.com"];

//salvo la mail inserita tramite prompt
const mailInserita = prompt("Inserisci la tua mail");

//indice dell'ultimo elemento nell'array
const indiceUltimoElemento = mailValide.length - 1;

for (let i = 0; i < mailValide.length; i++) {
  if (mailInserita === mailValide[i]) {
    console.log("Hai inserito un mail valida. Puoi accedere!");
    break;
  }

  if (i === indiceUltimoElemento) {
    console.log("Hai inserito una mail non valida. Non puoi accedere!");
  }
}
