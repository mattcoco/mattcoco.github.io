const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// funciones para añadir una clase según la acción realizada
function dragStart() {
    // no queremos sustituir, queremos concatenar (+=)
    this.className += ' hold';
    // Queremos que el fondo se ponga blanco
    // Hubiéramos puesto this.className = 'invisible' (que no hace nada al no estar definida, simplemente quita la clase hold) a secas, pero la imagen draggeada desaparezca. De alguna manera queremos poner la clase .invisible después de haber puesto la clase .hold; de ahí el setTimeout instantáneo
    setTimeout(() => 
    this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver() {
    //dragOver and Enter both have a default action: "reject immediate user selection as potential target element". We dont want that to happen, so we use this
    e.preventDefault()
}

function dragEnter() {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}