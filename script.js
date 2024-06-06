const noticias = [
    {
        titulo: 'Nueva Línea de Tren Inaugurada',
        contenido: 'Se ha inaugurado una nueva línea de tren que conectará las principales ciudades del país...',
        imagen: 'https://via.placeholder.com/300x200?text=Nueva+Línea+de+Tren',
        enlace: 'https://www.ejemplo.com/nueva-linea'
    },
    {
        titulo: 'Modernización de Estaciones',
        contenido: 'Las estaciones de tren serán modernizadas para ofrecer un mejor servicio a los usuarios...',
        imagen: 'https://via.placeholder.com/300x200?text=Modernización+de+Estaciones',
        enlace: 'https://www.ejemplo.com/modernizacion-estaciones'
    }
    // Agrega más noticias aquí
];

function renderNoticias() {
    const noticiasSection = document.getElementById('noticias');
    noticiasSection.innerHTML = ''; // Limpia la sección antes de renderizar

    noticias.forEach(noticia => {
        const article = document.createElement('a');
        article.href = noticia.enlace;
        article.target = '_blank'; // Abre el enlace en una nueva pestaña
        article.classList.add('noticia');

        const img = document.createElement('img');
        img.src = noticia.imagen;
        img.alt = noticia.titulo;

        const content = document.createElement('div');
        content.classList.add('content');

        const title = document.createElement('h2');
        title.textContent = noticia.titulo;

        const text = document.createElement('p');
        text.textContent = noticia.contenido;

        content.appendChild(title);
        content.appendChild(text);

        article.appendChild(img);
        article.appendChild(content);

        noticiasSection.appendChild(article);
    });
}

// Llama a la función para renderizar las noticias cuando se cargue la página
document.addEventListener('DOMContentLoaded', renderNoticias);
