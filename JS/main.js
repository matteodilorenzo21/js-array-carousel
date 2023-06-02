// JS LINK RUN CHECK
console.log('JS IS CORRECTLY RUNNING')

// Recupero i bottoni PREV e NEXT
const prevBtn = document.getElementById('prev');

const nextBtn = document.getElementById('next');

// Recuperiamo le immagini del Carousel
const images = document.querySelectorAll('#img-carousel img');

// Creo la variabile contenente l'index corrente di "images"
let currentIndex = 0;

// Settiamo la prima img come attiva
images[currentIndex].classList.add('active');


// Metto il bottone NEXT in ascolto
nextBtn.addEventListener('click', function() {
    
    // rimuovo la classe 'active' al currenIndex
    images[currentIndex].classList.remove('active');

    // incremento il currentIndex
    images[currentIndex++];
    if(currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    // aggiungo la classe 'active' al currentIndex successivo
    images[currentIndex].classList.add('active');
    
})


            
// Metto il bottone PREV in ascolto
prevBtn.addEventListener('click', function() {
                
    
    // rimuovo la classe 'active' al currenIndex
    images[currentIndex].classList.remove('active')
    
    // incremento il currentIndex
    images[currentIndex--];
    if(currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    // aggiungo la classe 'active' al currentIndex successivo
    images[currentIndex].classList.add('active');
                
})

