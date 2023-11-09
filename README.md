## Mail

Programma che chiede all’utente la sua email, controlla che sia nella lista di chi può accedere e stampa un messaggio in console dicendo se si può accedere o meno.

- creo un array di mail che possono accedere
- prompt che chiede all'utente di inserire una mail
- il valore inserito dall'utente viene salvato in una variabile
- la mail inserita viene confrontata co le mail nell'array tramite un ciclo che agisce nel seguente modo:
  - si scorre l'array contenente le mail valide per accedere
  - si confronta la mail inserita con ogni elemento dell'array
    - se la mail inserita è uguale a una di quelle nell'array
      - stampo in console che si può accedere
      - smetto di scorrere l'array
    - altrimenti proseguo nel ciclo confrontando l'elemento successivo

## Gioco dei dadi

Programma che genera un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

- viene generato un numero random da 1 a 6 valido per il giocatore e salvato in una variabile
- viene generato un numero random da 1 a 6 valido per il computer e salvato in una variabile
- si confrontano i due valori
  - se il numero generato per il giocatore è > del numero generato per il computer
    - stampa in console che il giocatore ha vinto
  - se il numero generato per il giocatore è > del numero generato per il computer
    - stampa in console che il computer ha vinto
  - altrimenti stampa in console che è finita in parità
