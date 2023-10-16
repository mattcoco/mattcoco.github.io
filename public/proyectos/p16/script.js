const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// Lanzada apenas se cargue el documento
updateBigCup();


smallCups.forEach((cup, idx) => {
    //Ponemos el idx para saber en cual hacemos click
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    console.log(idx);
    // Si la cup donde hacemos clic esta llena y la siguiente no (si el siguiente elemento NO contiene la clase .full); entonces la vaciamos (idx se decrementa; dejando llena la cup anterior)
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        //Iteramos en todas las cups, si la cup iterada es inferior a la cup que hemos hecho click...:
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    // Lanzamos updateBigCup cuando clickeamos
    updateBigCup();
}

function updateBigCup() {
    //Cantidad de cups llenas (donde hemos hecho click)
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length; // 8 en este caso

    //si no hay cups llenas
    if(fullCups === 0) {
        // El div percentage (el de abajo de la cup grande) se oculta
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else { //Y si hay alguna cup llena
        //el div se vuelve visible
        percentage.style.visibility = 'visible';
        //la altura se vuelve proporcional al numero de cups, 330 es la altura y fullCups/totalCups es la proporcion
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        // Y se pone el texto del porcentaje
        percentage.innerText =  `${fullCups / totalCups * 100}%`;
    }

    //Si hemos clickado en todas las cups (todas estan llenas)
    if(fullCups === totalCups) {
        //el div del remained (el de arriba de la cup grande) se oculta
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else { // y si no, si hay alguna cup vacia
        // el div remained se muestra
        remained.style.visibility = 'visible';

        // y se muestra un texto de cuantos litros quedan para llenarlo
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}