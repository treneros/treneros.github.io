// footer.js
document.addEventListener('DOMContentLoaded', () => {
    const footerData = {
        text: "© 2024 Treneros.es",
        socialLinks: [
            { href: "#", imgSrc: "icons/x.jpg", alt: "X" },
            
        ]
    };

    const footerSection = document.getElementById('footer-section');

    footerSection.innerHTML = `
        <div class="footer-content">
            <div class="social-links">
                ${footerData.socialLinks.map(link => `
                    <a href="${link.href}">
                        <img src="${link.imgSrc}" alt="${link.alt}" width="40" height="40">
                    </a>
                `).join('')}
            </div>
            <p>${footerData.text}</p>
        </div>
    `;
});
