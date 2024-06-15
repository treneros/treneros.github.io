// Array para almacenar los elementos del menú
const menuItems = [
    {
        texto: 'Noticias',
        enlace: 'treneros.es/index.html'
    },
    {
        texto: 'Sobre Treneros.es',
        enlace: 'treneros.es/acercade.html'
    }
    // Puedes agregar más elementos aquí según sea necesario
];

function renderMenu() {
    const sideMenu = document.getElementById('side-menu');
    const menuList = sideMenu.querySelector('ul');
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Menú';
    menuTitle.classList.add('menu-title');
    sideMenu.insertBefore(menuTitle, menuList);
    
    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.enlace;
        link.textContent = item.texto;
        listItem.appendChild(link);
        menuList.appendChild(listItem);
    });
}

// Llama a la función para renderizar el menú cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});

// Función para abrir/cerrar el menú
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
});

document.getElementById('close-menu').addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});
