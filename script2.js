// Array con los títulos y el enlace de la página principal
const titulosArray = [
    { titulo: "Treneros.es", enlace: "https://treneros.es/index.html" },
    "Noticias Ferroviarias"
];

// Obtener el contenedor de los títulos y el contenedor del enlace
const titlesContainer = document.getElementById('titles-container');
const enlaceContainer = document.getElementById('enlace-container');

// Iterar sobre el array de títulos y crear los elementos h1, h2 y enlace
titulosArray.forEach((titulo, index) => {
    const elemento = document.createElement(index === 0 ? 'h1' : 'h2');
    
    // Si es el primer título, crear un enlace y aplicar el estilo de título
    if (index === 0) {
        const enlace = document.createElement('a');
        enlace.setAttribute('href', titulosArray[0].enlace);
        enlace.textContent = titulosArray[0].titulo;
        enlace.setAttribute('id', 'titulo-enlace'); // Agregar identificador
        enlaceContainer.appendChild(enlace);
    } else {
        elemento.textContent = titulo;
        titlesContainer.appendChild(elemento);
    }
});
