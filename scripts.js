document.addEventListener('DOMContentLoaded', () => {
    // Modo oscuro
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
    }

    // Animaciones al hacer scroll
    const sections = document.querySelectorAll('.section, .banner, .ratitas-section'); // Incluye .ratitas-section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    document.addEventListener('DOMContentLoaded', () => {
        const bannerText = document.querySelector('.banner-text');
        const textWidth = bannerText.offsetWidth;
        const bannerWidth = document.querySelector('.banner').offsetWidth;
        const duration = (textWidth + bannerWidth) / 50; // 50px/s como velocidad base
        bannerText.parentElement.style.animationDuration = `${duration}s`;
    });
});