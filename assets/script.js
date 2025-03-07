document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero");
    const heroHeight = heroSection.offsetHeight;
    const button = document.querySelector(".button");
    const fadeElements = document.querySelectorAll(".fade-in");
    
    // Funzione per il cambio della navbar durante lo scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > heroHeight - 50) {
            navbar.classList.add("scrolled");
            button.style.backgroundColor = "#1a8917"; // Cambia colore a verde
        } else {
            navbar.classList.remove("scrolled");
            button.style.backgroundColor = "#191919"; // Torna nero
        }
    });
    
    // Effetto fade-in
    function handleScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    // Animazione delle "M" nella sezione hero
    const animatedMs = document.querySelectorAll(".hero-svg text");
    let index = 0;
    
    function animateMs() {
        animatedMs.forEach((m, i) => {
            m.style.opacity = i === index ? "1" : "0.3";
        });
        index = (index + 1) % animatedMs.length;
    }
    
    setInterval(animateMs, 500); // Cambia ogni 500ms
});
