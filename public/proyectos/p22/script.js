const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const sizeShow = document.getElementById('size');
const colorPick = document.getElementById('color');
const btnClear = document.getElementById('clear');

let size = 10;
sizeShow.innerHTML = size;
let isPressed = false;
let color = colorPick.value;
let x;
let y;

increase.addEventListener('click', (e) => {
    size++;    
    sizeShow.innerHTML = size;
})

decrease.addEventListener('click', (e) => {
    size--;
    sizeShow.innerHTML = size;
})

colorPick.addEventListener('input', (e) => {
    color = colorPick.value;
})


btnClear.addEventListener('click', (e) => {
    size = 10;    
    sizeShow.innerHTML = size;
    color = 'black';
    colorPick.value = 'black'
})


canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
    
    drawCircle(x, y);
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;

})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        // Para que veamos que se imprimen las coordenadas del ratón
        // console.log(x2, y2);
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2)

        x = x2,
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    // Pi * 2 * diametro es la cricunferencia entera
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Si pintamos rápido, la línea sale discontinuada. Por eso hacemos líneas tb
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    // La línea está "adaptada" al radio del tazo, así que multiplicamos x2 para obtener diámetro y que sea del mismo grosor que el drawCircle
    ctx.lineWidth = size * 2;
    ctx.stroke();
}