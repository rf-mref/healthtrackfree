// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {

// Language switcher
let currentLang = 'pt';

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update all translatable elements
        document.querySelectorAll('[data-pt]').forEach(el => {
            el.textContent = el.dataset[currentLang];
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const wasActive = item.classList.contains('active');
        
        // Close all items
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!wasActive) {
            item.classList.add('active');
        }
    });
});

// Screenshots Carousel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

if (track && prevBtn && nextBtn) {
    const scrollAmount = 400;
    
    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    // Hide/show buttons based on scroll position
    track.addEventListener('scroll', () => {
        prevBtn.style.display = track.scrollLeft > 0 ? 'block' : 'none';
        nextBtn.style.display = track.scrollLeft < (track.scrollWidth - track.clientWidth - 10) ? 'block' : 'none';
    });
    
    // Initial button state
    prevBtn.style.display = 'none';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

}); // End DOMContentLoaded
