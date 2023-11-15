//Descompongo API_URL para saber de dónde viene cada parámetro

//Version of API, pone que es la 3 en la web
const versionOfAPI = 3;
//Según la API, para buscar las pelis más populares
const typeOfSearch = '/discover/movie?sort_by=popularity.desc';
//La clave API, que nos dan una vez registrados
const apiKey = 'de303957fe74f6b6e7026240d9f65c32';

const API_URL = `${'https://api.themoviedb.org/' + versionOfAPI + typeOfSearch + '&api_key=' + apiKey + '&page=1'}`; //Ponemos page = 1 porque queremos solo los primeros resultados; no haremos paginación. La API_URL al final queda: https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=de303957fe74f6b6e7026240d9f65c32&page=1

//Esta dirección la saco de https://developers.themoviedb.org/3/getting-started/images
//El objeto del API_URL devuelve la imagen con / incluido en el path; lo eliminamos al final del /p/w1280/
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

//Cambiamos /discover/ por /search/, el sort_by. Acabamos con tan solo un ", para concatenar después
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=de303957fe74f6b6e7026240d9f65c32&query="';

console.log(API_URL);

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

//Get initial movies

getMovies(API_URL);

async function getMovies(url) {
    //Res means response. Await porque fetch returns a promise; no estamos obligados a hacer async + await pero después del fetch tendríamos que poner .then(cosas)
    const res = await fetch(url);
    //esto nos da la info en formato jason
    const data = await res.json();
    //The response res in the browser had a results array; queremos imprimir eso
    //console.log(data.results);
    showMovies(data.results);
}

//En (movies) ponemos data.results; res era la respuesta, data era la respuesta en formato json, data.results es el array de objetos de la respuesta; movie es cada objeto, cuyas propiedades se acceden con .title y .id, etc.
function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        //Se crea el elemento movieEl; pero para que se añada al DOM hay que hacer el appendChild(movieEl) al final
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        
        movieEl.innerHTML = `
        
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>${overview}</h3>
            </div>
            
        `;

        // Y se añade al DOM
        main.appendChild(movieEl);
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

//Variable local e, de evento
form.addEventListener('submit', (e) => {
    //"So it doesn't actually submit to the page"
    e.preventDefault();
    const searchTerm = search.value;

    //"If" searchTerm exists and searchterm isn't equal to anything"
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        //Si no submiteamos nada, recargamos la página
        window.location.reload();
    }
})