document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');
    const sections = document.querySelectorAll('.rule-section');

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(id).classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(navLink => navLink.classList.remove('active'));
            e.target.classList.add('active');

            const sectionId = e.target.getAttribute('href');
            showSection(sectionId);
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        showSection(navLinks[0].getAttribute('href'));
    }
});