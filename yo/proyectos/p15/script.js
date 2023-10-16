//  Como tenemos varios counters, eso significa que tenemos que sacarlos con QuerySelectorAll

const counter = document.querySelectorAll('.counter');

counter.forEach(counter => {
    counter.innerText = '0'

    const updateCounter =() => {
        // El signo + convertira la variable de tipo string a tipo number
        // Se coge el atributo HTML 'data-target' que pusimos
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})

