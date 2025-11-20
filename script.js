// Mobile Menu
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Pink Cursor Trail
document.addEventListener("mousemove", (e) => {
    const dot = document.createElement("div");
    dot.classList.add("cursor-dot");
   document.querySelector(".cursor-container").appendChild(dot);


    dot.style.left = `${e.pageX}px`;
    dot.style.top = `${e.pageY}px`;

    setTimeout(() => dot.remove(), 600);
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent! Thank you for contacting me.");
    e.target.reset();
});
// Reveal on Scroll (like example website)
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const triggerPoint = window.innerHeight - 120; // how early it appears

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            el.classList.add('active');
        }
    });
}

// Trigger on scroll + on page load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
// Slide Left Text Animation
const slideLeftElements = document.querySelectorAll('.slide-left');

function slideLeftOnScroll() {
    const triggerPoint = window.innerHeight - 100;

    slideLeftElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', slideLeftOnScroll);
window.addEventListener('load', slideLeftOnScroll);


