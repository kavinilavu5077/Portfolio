// Scroll Reveal
document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.load-hidden', {
      delay: 250,
      duration: 600,
      easing: 'ease-in-out',
      distance: '50px',
      origin: 'bottom',
      reset: false
    });
    ScrollReveal().reveal('.section-title', {
        delay: 200,
        duration: 1000,
        reset: true,
        distance: '50px',
        origin: 'bottom'
      });
    
      ScrollReveal().reveal('.about-wrapper__image', {
        delay: 400,
        duration: 1000,
        reset: true,
        distance: '50px',
        origin: 'left'
      });
    
      ScrollReveal().reveal('.about-wrapper__info', {
        delay: 600,
        duration: 1000,
        reset: true,
        distance: '50px',
        origin: 'right'
      });
    
      ScrollReveal().reveal('.about-wrapper__info-list-container', {
        delay: 800,
        duration: 1000,
        reset: true,
        distance: '50px',
        origin: 'bottom'
      });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const emoji = '😊';
    const emojiElement = document.getElementById('emoji');
    emojiElement.textContent = emoji;
  });
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.load-hidden');
    elements.forEach(element => {
      element.classList.add('loaded');
    });
  });
  
  
  // Vanilla Tilt
  VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
  });
  

