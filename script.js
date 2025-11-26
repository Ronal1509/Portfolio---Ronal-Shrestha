// ====== MOBILE MENU TOGGLE ======
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.textContent = isOpen ? '✕' : '☰';
});

// ====== CLOSE MENU WHEN LINK IS CLICKED (MOBILE UX) ======
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            menuButton.textContent = '☰';
            menuButton.setAttribute('aria-expanded', false);
        }
    });
});

// ====== FORM VALIDATION ======
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "❌ Please fill out all fields!";
        formMessage.style.color = "red";
        return;
    }

    // Success
    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    formMessage.style.color = "limegreen";

    contactForm.reset();
});
