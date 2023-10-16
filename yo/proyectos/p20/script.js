const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        // Imprime donde clickamos, en el viewport. X es pixels desde la izq, y es pixels desde el top
        console.log('Coord. en el viewport ' + x + ' ' + y)
        // Da la posición de la esquina top+left del botón; es constante
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        console.log('Coord. del botón ' + buttonLeft + ' ' + buttonTop)

        // Hacemos la diferencia para obtener las coord dentro del botón
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        console.log('Coord. dentro del botón ' + xInside + ' ' + yInside)

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        // OJO: El pone this.appendChild(circle), pero para que funcione necesita poner una función normal funtion (e) {} en el addEventListener, y no una arrow function
        button.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
})