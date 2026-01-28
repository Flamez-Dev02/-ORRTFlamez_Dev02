// Scroll reveal animations
const elements = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  elements.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 200) {
      section.classList.add('show');
    }
  });
});

// Typing animation for subtitle with better performance
let i = 0;
const text = "Front-End Developer | JavaScript";

function typeEffect() {
  const leadElement = document.querySelector(".lead");
  if (!leadElement) return;
  
  if (i < text.length) {
    leadElement.textContent = text.substring(0, i + 1);
    i++;
    setTimeout(typeEffect, 80);
  }
}

window.addEventListener('load', typeEffect);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    
    if (target && href !== '#') {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Initialize
window.addEventListener('load', () => {
  console.log('✓ FLAMEZ_DEV Portfolio initialized');
});