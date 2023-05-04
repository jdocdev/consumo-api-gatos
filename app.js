// Url del api de gatos
const apiUrl = 'https://api.thecatapi.com/v1/images/search';

// Obtener el botón y el contenedor donde se mostrara el gato
const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-container');

// Escuchar cuando se da clic en el botón
btnCat.addEventListener('click', () => {
    // LLamar a la api y obtener la imagen aleatoria de un gato
    fetch(apiUrl)
        // convertir la respuesta a JSON
        .then(response => response.json())
        .then(data => {
            // Obtener la url de la imagen del gato
            const catImgUrl = data[0].url;

            // agregar la imagen como background al container
            catImgContainer.style.backgroundImage = `url('${catImgUrl}')`;
            
        })
        .catch(error => console.log(error));
})
