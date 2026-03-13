document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    // Language switcher logic
    const setLanguage = (lang) => {
        const translatables = document.querySelectorAll('[data-es][data-en]');
        
        translatables.forEach(elem => {
            // Update the text content
            if (elem.dataset[lang]) {
                elem.textContent = elem.dataset[lang];
            }
            
            // If the element is an input or textarea with placeholder, update it based on the text
            // In contact.html we have placeholders, but they are mixed in the same string for simplicity.
            // But we can also improve it by splitting if we wanted, for now they are fine.
        });

        // Toggle active class on buttons
        if (lang === 'es') {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
        }

        // Save preference
        localStorage.setItem('cv-lang', lang);
    };

    // Event listeners
    btnEs.addEventListener('click', () => setLanguage('es'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    // Check for saved language preference
    const savedLang = localStorage.getItem('cv-lang') || 'es';
    setLanguage(savedLang);
});
