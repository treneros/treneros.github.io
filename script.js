const noticias = [
    {
        titulo: 'Nueva Línea de Tren Inaugurada',
        contenido: 'Se ha inaugurado una nueva línea de tren que conectará las principales ciudades del país...',
        imagen: 'https://via.placeholder.com/300x200?text=Nueva+Línea+de+Tren',
        enlace: 'https://www.ejemplo.com/nueva-linea'
    },
    {
        titulo: 'Treneros.es: La nueva web para los ferroviarios españoles',
        contenido: 'Treneros.es trata de una página web de temática ferroviaria y un portal en línea diseñado específicamente para conectar a amantes del ferrocarril, desde aficionados hasta expertos, en un espacio donde puedan compartir su pasión, conocimientos y experiencias.',
        imagen: 'noticias/imgsnoticias/LOGOTRENEROS-ES-[noticia].jpg',
        enlace: 'noticias/noticia-bienvenida.html'
    }
    // Agrega más noticias aquí
];

function renderNoticias() {
    const noticiasSection = document.getElementById('noticias');
    noticiasSection.innerHTML = ''; // Limpia la sección antes de renderizar

    noticias.forEach(noticia => {
        const article = document.createElement('a');
        article.href = noticia.enlace; // Eliminamos article.target para abrir en la misma pestaña
        article.classList.add('noticia');

        const img = document.createElement('img');
        img.src = noticia.imagen;
        img.alt = noticia.titulo;
        img.onerror = () => img.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible'; // Manejo de error de carga de imagen

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
document.addEventListener('DOMContentLoaded', () => {
    renderNoticias();
});
