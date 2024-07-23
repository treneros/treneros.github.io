const noticias = [
    
    {
    titulo: 'La estación de Montijo estrena su electrificación.',
    contenido: 'Tras varias semanas de pruebas, el pasado Lunes 22 de julio los servicios Alvia 00190 y 00193 (que paran en Montijo) estrenaron el tramo de catenaria por la estación.',
    imagen: 'noticias/imgsnoticias/Montijo_electrificacion_estreno_2.jpg',
    enlace: 'noticias/Montijo_estrena_la_electrificacion.html'
},
    
    {
    titulo: 'ADIF Alta Velocidad licita la mejora del túnel de Santa Marina y otros elementos de la LAV por 3,4 millones de euros.',
    contenido: 'La empresa ADIF Alta Velocidad ha licitado dentro de la LAV Madrid-Extremadura, una mejora en el túnel de Santa Marina y otra en las pantallas anticolisión de aves en los viaductos de Pizarroso y Valdetravieso, por un total de 3,4 millones de euros.',
    imagen: 'noticias/imgsnoticias/adif_alta_velocidad_mejora_tunel_santa_marina_lav_3_4_millones_1.jpg',
    enlace: 'noticias/adif_alta_velocidad_licita_mejora_tunel_santa_marina_lav_3_4_millones.html'
    },
    
    {
        titulo: 'Se cumplen dos años desde la inauguración de la línea de Alta Velocidad entre Plasencia y Badajoz',
        contenido: 'Hoy se cumplen dos años desde la inauguración (para los viajeros) de la línea de Alta Velocidad entre Plasencia y Badajoz, además de la llegada de los trenes S-730 a Extremadura, el día 19 de Julio de 2022.',
        imagen: 'noticias/imgsnoticias/f3a07191-160c-4ec1-ba8e-5a6792a98cea.jpeg',
        enlace: 'noticias/se_cumplen_dos_anos_LAV_Plasencia_Badajoz.html'
    },
    
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
