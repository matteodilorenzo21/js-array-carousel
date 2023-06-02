# CAROSELLO
Dato un array contenente una lista di cinque immagini, creare un carosello.

# STEPS
0. Recuperare i bottoni Prev e Next dal DOM;

1. Recuperare in un Array le immagini per il Carousel;

2. Creare una variabile contenente l'indice corrente dell'Array;

3. Settare la prima immagine come visibile con l'apposita classe creata.

4. Mettere il bottone Next in ascolto
    - rimuovere la classe 'active' all'indice corrente,
    - incrementare l'indice corrente,
        **se** l'indice corrente è maggiore della lenght dell'Array **allora** riportare l'indice corrente a 0;
    - aggiungere la classe 'active' all'indice corrente successivo;

5. Mettere il bottone Prev in ascolto
    - rimuovere la classe 'active' all'indice corrente,
    - decrementare l'indice corrente,
        **se** l'indice corrente è minore di 0 **allora** riportare l'indice corrente ad array.lenght - 1;
    - aggiungere la classe 'active' all'indice corrente successivo;